const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9SBHZXrLYiKlvRxaM8TaqICwB7VkWy_6T8B1WTkz_CXEBNTNYo9B_J1WxZlA9Ebxa/exec";

export const submitLead = async (leadData) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        ...leadData,
        source: "Website",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Lead API response:", data);

    return data;

  } catch (error) {
    console.error("submitLead error:", error);
    return { result: "error", message: error.message };
  }
};