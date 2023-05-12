function signIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Please fill in all fields.");
    } else {
        let users = JSON.parse(localStorage.getItem("users"));

        if (users != null && users[username] != null && users[username].password == password) {
            alert("Sign in successful!");
            window.location.href = "homepage.html"; // redirect to homepage
        } else {
            alert("Invalid username or password.");
        }
    }
}

// Create some test users
let users = {
    "user1": {
        "password": "password1"
    },
    "user2": {
        "password": "password2"
    }
};

// Save users to local storage
localStorage.setItem("users", JSON.stringify(users));

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  // Perform validation checks on the input fields here

  // Send the data to the server using AJAX or fetch
});