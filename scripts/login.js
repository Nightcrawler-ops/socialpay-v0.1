const loginForm = document.getElementById("loginForm");
const loginPasswordInput = document.getElementById("password");
const loginTogglePassword = document.getElementById("togglePassword");

loginTogglePassword.addEventListener('mousedown', () => {
    loginPasswordInput.type = 'text';
    loginTogglePassword.classList.add('animated');
});

loginTogglePassword.addEventListener('mouseup', () => {
    loginPasswordInput.type = 'password';
    loginTogglePassword.classList.remove('animated');
});

loginTogglePassword.addEventListener('mouseleave', () => {
    loginPasswordInput.type = 'password';
    loginTogglePassword.classList.remove('animated');
});

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById("usernameOrEmail").value;
    const password = loginPasswordInput.value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: usernameOrEmail, password })
        });

        const result = await response.json();

        console.log("Response status:", response.status);
        console.log("Response data:", result);

        if (response.status === 200) {
            localStorage.setItem('username', result.username || result.email);
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
    }
});
