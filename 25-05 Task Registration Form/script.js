function check(event) {
    event.preventDefault(); // Prevent form submission
  
    var firstName = document.getElementById("firstname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var state = document.getElementById("state").value;
  
    var nameCheck = /^[a-zA-Z]{2,}$/;
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    var errorMessages = []; // Store error messages
  
    if (firstName === "") {
      errorMessages.push("Please enter your name");
    } else if (!nameCheck.test(firstName)) {
      errorMessages.push("Name must only contain alphabets and have at least 2 characters");
    }
  
    if (email === "" || !emailCheck.test(email)) {
      errorMessages.push("Please enter a valid email address");
    }
  
    if (password === "") {
      errorMessages.push("Please enter a password");
    } else if (!passwordCheck.test(password)) {
      errorMessages.push(
        "Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character"
      );
    }
  
    if (confirmPassword === "") {
      errorMessages.push("Please confirm your password");
    } else if (password !== confirmPassword) {
      errorMessages.push("Password and confirm password do not match");
    }
  
    if (!gender) {
      errorMessages.push("Please select a gender");
    }
  
    if (state === "") {
      errorMessages.push("Please select a state");
    }
  
    if (errorMessages.length > 0) {
      // Display error messages
      var errorBox = document.getElementById("error-box");
      errorBox.innerHTML = ""; // Clear previous error messages
  
      for (var i = 0; i < errorMessages.length; i++) {
        var errorMessage = errorMessages[i];
        var errorItem = document.createElement("div");
        errorItem.className = "error-item";
        errorItem.textContent = errorMessage;
        errorBox.appendChild(errorItem);
      }
  
      errorBox.style.display = "block"; // Show the error box
  
      return false;
    }
  
    // Store the form data in the console
    console.log("Name:", firstName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Gender:", gender.value);
    console.log("State:", state);
  
    return true;
  }
  
  function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(inputId + "-icon");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  }
  