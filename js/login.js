document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials for demonstration purposes
    const storedUsername = "admin";
    const storedPassword = "password123";
    
    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('loggedIn', true);
        window.location.href = "resume.html";
    } else {
        document.getElementById('errorMsg').textContent = "Invalid username/password";
    }
});
