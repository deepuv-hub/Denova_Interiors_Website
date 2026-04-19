export const submitLead = async ({ name, phone, location, requirement }) => {
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_kc2VMBHyV9A5hLuRJa_gZB/exec",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
          location,
          requirement,
        }),
      }
    );

    return { status: "success" };
  } catch (error) {
    console.error("Submit error:", error);
    return { status: "error" };
  }
};