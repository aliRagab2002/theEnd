
function submitForm() {
    // Get form data
    var FullName = document.getElementById("firstName").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;

    // Prepare data for API request
    var formData = {
        FullName: FullName,
        age: age,
        email: email,
        gender: gender
    };

    // Make API request
    fetch('http://localhost:5000/api/addpatient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response as needed
        console.log('API response:', data);
        alert('sucessful data added....')
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}


