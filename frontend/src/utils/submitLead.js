export const submitLead = async ({ name, phone, location, requirement }) => {
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec",
      {
        method: "POST",
        mode: "no-cors", // IMPORTANT
        body: JSON.stringify({
          name,
          phone,
          location,
          requirement,
          source: window.location.pathname,
        }),
      }
    );

    // ✅ Always return success (since Google won’t respond)
    return { status: "success" };

  } catch (error) {
    console.error("Lead error:", error);
    return { status: "error" };
  }
};