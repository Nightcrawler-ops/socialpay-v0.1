const signupForm = document.getElementById("signupForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const passwordStrength = document.getElementById("passwordStrength");

togglePassword.addEventListener('mousedown', () => {
    passwordInput.type = 'text';
    togglePassword.classList.add('animated');
});

togglePassword.addEventListener('mouseup', () => {
    passwordInput.type = 'password';
    togglePassword.classList.remove('animated');
});

togglePassword.addEventListener('mouseleave', () => {
    passwordInput.type = 'password';
    togglePassword.classList.remove('animated');
});

toggleConfirmPassword.addEventListener('mousedown', () => {
    confirmPasswordInput.type = 'text';
    toggleConfirmPassword.classList.add('animated');
});

toggleConfirmPassword.addEventListener('mouseup', () => {
    confirmPasswordInput.type = 'password';
    toggleConfirmPassword.classList.remove('animated');
});

toggleConfirmPassword.addEventListener('mouseleave', () => {
    confirmPasswordInput.type = 'password';
    toggleConfirmPassword.classList.remove('animated');
});

passwordInput.addEventListener("input", function () {
    const value = passwordInput.value;
    const strength = getPasswordStrength(value);
    passwordStrength.className = strength.class;
    passwordStrength.style.width = strength.width;
});

signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.includes(fullname) || password.includes(username) || password.includes(email.split('@')[0]) || password.includes(" ")) {
        alert("Password should not contain the full name, username, email, or spaces.");
        return;
    }

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname, username, email, password })
        });

        const result = await response.json();

        console.log("Response status:", response.status);
        console.log("Response data:", result);

        if (response.status === 201) {
            alert("Signup successful!");
            window.location.href = "/login.html";
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again.");
    }
});

function getPasswordStrength(password) {
    let strength = {
        class: "password-poor",
        width: "33%"
    };

    if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength.class = "password-strong";
        strength.width = "100%";
    } else if (password.length >= 6) {
        strength.class = "password-normal";
        strength.width = "66%";
    }

    return strength;
}
