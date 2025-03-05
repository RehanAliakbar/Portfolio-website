

function showForm(formType) {
    const buttonsDiv = document.getElementById('buttons');
    const formDiv = document.getElementById(formType);

    if (buttonsDiv && formDiv) { // Ensure elements exist
        buttonsDiv.style.display = 'none';
        formDiv.style.display = 'block';
    }
}

function goBack() {
    const buttonsDiv = document.getElementById('buttons');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (buttonsDiv) buttonsDiv.style.display = 'flex';
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'none';
}

// Loader animation fix
window.onload = function () {
    setTimeout(() => {
        const loader = document.querySelector(".loader-container");
        if (loader) {
            loader.classList.add("hidden");
            setTimeout(() => loader.style.display = "none", 500); // Smooth transition
        }
    }, 2000); // 2 sec loader
};
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm form");
    const signupForm = document.querySelector("#signupForm form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Sign Up Successful! Please Login.");
        goBack();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert("Login Successful!");
        } else {
            alert("Invalid Username or Password");
        }
    });
});










document.addEventListener("DOMContentLoaded", function () {
    // Login & Sign Up Forms
    const loginForm = document.querySelector("#loginForm form");
    const signupForm = document.querySelector("#signupForm form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("signup-username").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            const user = { username, email, password };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Sign Up Successful! Please Login.");
            goBack();
        });
    } else {
        console.error("Error: `signupForm` not found!");
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                showLoaderAndRedirect();
            } else {
                alert("Invalid Username or Password!");
            }
        });
    } else {
        console.error("Error: `loginForm` not found!");
    }

    function showLoaderAndRedirect() {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "flex";
            setTimeout(() => {
                loader.style.display = "none";
                window.location.href = "home.html";
            }, 2000);
        } else {
            console.error("Error: `loader` not found!");
        }
    }
});

// Show & Hide Forms
function showForm(formType) {
    const buttonsDiv = document.getElementById('buttons');
    const formDiv = document.getElementById(formType);

    if (buttonsDiv && formDiv) { 
        buttonsDiv.style.display = 'none';
        formDiv.style.display = 'block';
    }
}

function goBack() {
    const buttonsDiv = document.getElementById('buttons');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (buttonsDiv) buttonsDiv.style.display = 'flex';
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'none';
}










function showForm(formType) {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").classList.add("active")}