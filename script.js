// Theme Button 
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form 
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters.", "red");
  } else if (!email.includes("@")) {
    showMessage("Invalid email address.", "red");
  } else if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", "red");
  } else {
    showMessage("Registration successful!", "green");
  }
});

function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// Real-time validation (Bonus)
document.getElementById("username").addEventListener("input", () => {
  if (document.getElementById("username").value.length < 3) {
    showMessage("Username too short", "red");
  } else {
    message.textContent = "";
  }
});

document.getElementById("email").addEventListener("input", () => {
  email = document.getElementById("email").value;  
  if (!email.includes("@")) {
    showMessage("Invalid email address", "red");
  } else {
    message.textContent = "";
  }
});

document.getElementById("password").addEventListener("input", () => {
  if (document.getElementById("password").value.length < 6) {
    showMessage("Password must be at least 6 characters", "red");
  } else {
    message.textContent = "";
  }
});


const outer = document.getElementById("outer");

const inner = document.getElementById("inner");

const log = document.getElementById("log");

// Bubbling 
outer.addEventListener("click", () => {
  log.innerHTML += "Div Clicked <br>";
});

inner.addEventListener("click", () => {
  log.innerHTML += "Button Clicked <br>";
});
