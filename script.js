document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (form && thankYouMessage) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      // OPTIONAL: Send email using Formspree (see below)
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          form.style.display = 'none';
          thankYouMessage.style.display = 'block';
        } else {
          alert('There was a problem submitting the form.');
        }
      })
      .catch(error => {
        alert('There was a problem submitting the form.');
      });
    });
  }
});
