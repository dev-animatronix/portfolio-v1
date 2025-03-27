export function sendEmail(data) {
    const apiEndpoint = '/api/email'; // Utilise un chemin relatif correct
  
    fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert('Erreur lors de l\'envoi de l\'email: ' + err);
      });
}
