export const submitLead = async ({ name, phone, location, requirement }) => {
  try {
<<<<<<< HEAD
    await fetch(
      "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec",
      {
        method: "POST",
        mode: "no-cors", // IMPORTANT
=======
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
        body: JSON.stringify({
          name,
          phone,
          location,
          requirement,
          source: window.location.pathname,
        }),
      }
    );

<<<<<<< HEAD
    // ✅ Always return success (since Google won’t respond)
    return { status: "success" };
=======
    let result;

    try {
      result = await response.json();
    } catch {
      // fallback if JSON fails
      result = { status: "success" };
    }

    console.log("Lead response:", result);

    return result;
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3

  } catch (error) {
    console.error("Lead error:", error);
    return { status: "error" };
  }
};