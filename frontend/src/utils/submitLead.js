import { SCRIPT_URL } from "./api";

export const submitLead = async (leadData) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        ...leadData,
        source: leadData.source || "Website",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();


    return data;

  } catch (error) {
    console.error("submitLead error:", error);
    return { result: "error", message: error.message };
  }
};
