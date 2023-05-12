const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const amount = form.amount.value;
  const message = form.message.value;
  // Here you can use an API to process the donation and handle any errors
  // For example:
  fetch('/api/donate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, amount, message })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error processing donation');
    }
    // Show a success message to the user
    alert('Thank you for your donation!');
    form.reset();
  })
  .catch(error => {
    console.error(error);
    alert('There was an error processing your donation');
  });
});