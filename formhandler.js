document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (form && thankYouMessage) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent actual form submission
      form.style.display = 'none'; // Hide form
      thankYouMessage.style.display = 'block'; // Show thank-you message
    });
  }
});
