// googleScripts.js (mis à jour)
export async function submitDemo(formData) {
  // Construire un body URL‐encoded au lieu de JSON
  const params = new URLSearchParams();
  params.append('fullName', formData.fullName);
  params.append('email', formData.email);
  params.append('demoDateTime', formData.demoDateTime);
  params.append('requirements', formData.requirements);
  params.append('timestamp', new Date().toISOString());

  // Envoi en mode no-cors, sans préciser Content-Type
  return fetch('https://script.google.com/macros/s/AKfycby_jj_exos5DhpucIcOHrKv-IEiEM1PuZgkQF2vntGx3geMh1QtIk91xZ47Sq5xWztD/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: params
  });
}

