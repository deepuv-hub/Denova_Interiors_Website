export const submitLead = async ({ name, phone, location }) => {
  try {
    await fetch("https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name,
        phone,
        location,
      }),
    });
  } catch (error) {
    console.log("Lead error:", error);
  }
};