export async function submitDemoForm(formData) {
  const url = "https://script.google.com/macros/s/AKfycbyPAQHDLPmQuHx-iPY1ecIIozHsSq4fn94RjhpF9VTu3HUxNduakbnGm-LfpGM0TnLhiw/exec";

  const response = await fetch(url, {
    method: "POST",
    mode: 'no-cors', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
}
