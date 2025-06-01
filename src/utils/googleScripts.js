export async function submitDemoForm(formData) {
  const url = "https://script.google.com/macros/s/AKfycbxFyW31OLZy0Bp7nCImJVdfnzDl7PEuHr4AD46976zfzQaxqr1UKiu3g7S8SmtXZkrAWg/exec";

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: 'no-cors', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Form submission error:", error);
    throw error;
  }
}
