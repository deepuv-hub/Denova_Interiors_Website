// Central lead capture and conversion tracking.
//
// Primary lead conversion route (single source of truth):
//   successful lead submission -> trackLeadConversion() -> one dataLayer
//   `lead_conversion` event -> GTM (GTM-59NLP9MV) Google Ads conversion tag.
//
// The site loads Google tags only through GTM, so `window.gtag` is not
// defined and no direct gtag() conversion is sent from code. Sending one
// would double count with the GTM tag that already fires on
// `lead_conversion`. Never fire this from the thank-you page.

import { useCallback, useEffect, useRef, useState } from "react";
import { SCRIPT_URL } from "./api";

// Reference only: the conversion is sent by the GTM Google Ads tag that is
// triggered by LEAD_CONVERSION_EVENT, not from this code.
export const GOOGLE_ADS_LEAD_CONVERSION = "AW-11303451952/63-FCIP1rZ8cELD6840q";
export const LEAD_CONVERSION_EVENT = "lead_conversion";

const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
];
const LANDING_PAGE_KEY = "landing_page";
const CONVERSION_KEY_PREFIX = "denova_lead_conversion_";
const DATALAYER_TIMEOUT_MS = 2000;

const safeGet = (storage, key) => {
  try {
    return window[storage].getItem(key);
  } catch (e) {
    return null;
  }
};

const safeSet = (storage, key, value) => {
  try {
    window[storage].setItem(key, value);
  } catch (e) {
    // Storage unavailable (private mode, quota): continue without it.
  }
};

// Store non-empty URL attribution values. Empty values never overwrite
// stored ones; the first landing page is kept.
export const captureAttribution = () => {
  const params = new URLSearchParams(window.location.search);

  ATTRIBUTION_PARAMS.forEach((key) => {
    const value = (params.get(key) || "").trim();
    if (value) safeSet("localStorage", key, value);
  });

  if (!safeGet("localStorage", LANDING_PAGE_KEY)) {
    safeSet("localStorage", LANDING_PAGE_KEY, window.location.href);
  }
};

export const getAttribution = () => {
  const attribution = {};
  ATTRIBUTION_PARAMS.forEach((key) => {
    attribution[key] = safeGet("localStorage", key) || "";
  });
  attribution.landing_page = safeGet("localStorage", LANDING_PAGE_KEY) || window.location.href;
  return attribution;
};

export const generateLeadId = () => {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    const bytes = window.crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  return `lead-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
};

export const normalizeName = (value) => (value || "").trim().replace(/\s+/g, " ");

export const normalizeEmail = (value) => (value || "").trim().toLowerCase();

// Returns the 10-digit Indian mobile number, dropping spaces, dashes and a
// leading +91 / 91 / 0.
export const normalizePhone = (value) => {
  let digits = (value || "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
};

export const isValidIndianMobile = (value) => /^[6-9]\d{9}$/.test(normalizePhone(value));

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(value));

// Builds the lead payload sent to the Apps Script. `lead_status` starts at
// "submitted"; qualified / converted statuses must come from sales follow-up.
export const buildLeadPayload = (fields) => {
  const payload = {
    ...fields,
    name: normalizeName(fields.name),
    phone: normalizePhone(fields.phone),
    email: normalizeEmail(fields.email),
    ...getAttribution(),
    lead_id: generateLeadId(),
    lead_status: "submitted",
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  Object.keys(payload).forEach((key) => {
    if (typeof payload[key] === "string") payload[key] = payload[key].trim();
  });

  return payload;
};

// Posts a lead to the Apps Script with the existing no-cors transport.
// The response is opaque: a resolved promise only means the request reached
// the network, not that the script saved the row. Rejects on network failure.
export const postLeadNoCors = async (payload) => {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(payload),
  });
};

// Pushes exactly one `lead_conversion` event per lead_id per session.
// Resolves once GTM reports the event's tags have fired, or after a timeout
// (GTM blocked or slow), so the caller can redirect safely.
export const trackLeadConversion = ({ leadId, leadSource }) => {
  if (!leadId) return Promise.resolve(false);

  const storageKey = `${CONVERSION_KEY_PREFIX}${leadId}`;
  if (safeGet("sessionStorage", storageKey)) return Promise.resolve(false);
  safeSet("sessionStorage", storageKey, "1");

  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve(true);
    };

    setTimeout(finish, DATALAYER_TIMEOUT_MS + 500);

    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: LEAD_CONVERSION_EVENT,
        lead_id: leadId,
        transaction_id: leadId,
        lead_source: leadSource || "",
        eventCallback: finish,
        eventTimeout: DATALAYER_TIMEOUT_MS,
      });
    } catch (e) {
      // A broken tag must not block the visitor's redirect / result screen.
      finish();
    }
  });
};

// Synchronous lock against double clicks / parallel submissions. `submitting`
// drives the loading UI. The lock is released when the page is restored from
// the back/forward cache so the form is usable again without resubmitting.
export const useSubmitLock = () => {
  const lockRef = useRef(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        lockRef.current = false;
        setSubmitting(false);
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const acquire = useCallback(() => {
    if (lockRef.current) return false;
    lockRef.current = true;
    setSubmitting(true);
    return true;
  }, []);

  const release = useCallback(() => {
    lockRef.current = false;
    setSubmitting(false);
  }, []);

  return { submitting, acquire, release };
};
