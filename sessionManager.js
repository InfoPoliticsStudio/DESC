

    // Automatically display student image when Student ID is entered
    document.getElementById('studentID').addEventListener('input', function() {
        const studentID = this.value;
        const imgElement = document.getElementById('studentImage');
        
        if (students[studentID]) {
            imgElement.src = students[studentID].imageUrl;
            imgElement.style.display = 'block';
        } else {
            imgElement.style.display = 'none';
        }
    });

    // Validate login when "Login" button is clicked
    function validateLogin() {
        const studentID = document.getElementById('studentID').value;
        const password = document.getElementById('password').value;

        if (students[studentID] && students[studentID].password === password) {
            // Successful login, redirect to another page
            alert("Login successful! Welcome " + students[studentID].name);
            window.location.href = "data605.html"; // Redirect to another page
        } else {
            // Invalid login credentials
            alert("Invalid Student ID or Password");
        }
    }

