document.getElementById('loginButton').addEventListener('click', function() {
    // Get email and password values from the form
    const email = document.getElementById('form3Example3').value;
    const password = document.getElementById('form3Example4').value;

    // Prepare the data to be sent in the request body
    const data = {
      email: email,
      password: password
    };

    // Send a POST request to your login API endpoint
    fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      
    })
    
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the successful login response
      console.log(data);
      window.location.href='dashboard.html'
      // Redirect or perform other actions as needed
    })
    .catch(error => {
      // Handle errors during the fetch
      console.error('There was a problem with the fetch operation:', error);
      // Handle login failure, show error messages, etc.
    });
  });