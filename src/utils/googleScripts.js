export async function submitDemoForm(formData) {
  const url = "https://script.google.com/macros/s/AKfycby_jj_exos5DhpucIcOHrKv-IEiEM1PuZgkQF2vntGx3geMh1QtIk91xZ47Sq5xWztD/exec";

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
