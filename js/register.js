function registerUser() {
    // Get form values
    const name = document.getElementById('form3Example1c').value;
    const email = document.getElementById('form3Example3c').value;
    const password = document.getElementById('form3Example4c').value;

    // Prepare data for the PUT request
    const data = {
        name: name,
        email: email,
        password: password,
    };

    // Make a PUT request using fetch
    fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        alert('Successful Register ')
        console.log('Success:', data);

        // You can perform additional actions here, such as redirecting the user to a login page.
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}