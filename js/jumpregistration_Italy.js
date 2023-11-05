document.getElementById('registrationBtn').addEventListener('click', function() {
    redirectToRegistration();
  });
  function redirectToRegistration() {
    window.location.href = 'registration.html?type=italy';
  }