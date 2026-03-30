export const submitLead = async ({ name, phone, location }) => {
  try {
    await fetch("https://script.google.com/macros/s/AKfycbz-e8LRs1I3H0avL17ryzctzD53Mq4F3KCPQ066DtyH4ksHMj7ZmWhNmsJz9DfbOPtK/exec", {
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