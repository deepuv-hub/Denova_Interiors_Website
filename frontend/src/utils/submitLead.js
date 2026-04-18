export const submitLead = async ({ name, phone, location, requirement }) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          location,
          requirement,
          source: window.location.pathname,
        }),
      }
    );

    let result;

    try {
      result = await response.json();
    } catch {
      // fallback if JSON fails
      result = { status: "success" };
    }

    console.log("Lead response:", result);

    return result;

  } catch (error) {
    console.error("Lead error:", error);
    return { status: "error" };
  }
};