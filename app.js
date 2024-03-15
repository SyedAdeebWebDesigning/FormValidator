document
	.getElementById("registrationForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission

		// Reset errors
		clearErrors();

		// Get form values
		var fullName = document.getElementById("fullName").value;
		var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value;
		var password = document.getElementById("password").value;
		var confirmPassword = document.getElementById("confirmPassword").value;

		// Validate full name
		if (fullName.length < 5) {
			document.getElementById("fullNameError").innerText =
				"Name must be at least 5 characters long";
		}

		// Validate email
		if (!email.includes("@")) {
			document.getElementById("emailError").innerText = "Enter a valid email";
		}

		// Validate phone number
		if (phone.length !== 10 || phone === "1234567890") {
			document.getElementById("phoneError").innerText =
				"Enter a valid 10-digit phone number";
		}

		// Validate password
		if (
			password.length < 8 ||
			password.toLowerCase() === "password" ||
			password.toLowerCase() === fullName.toLowerCase()
		) {
			document.getElementById("passwordError").innerText =
				'Password must be at least 8 characters long and not be "password" or the same as your name';
		}

		// Confirm password
		if (password !== confirmPassword) {
			document.getElementById("confirmPasswordError").innerText =
				"Passwords do not match";
		}

		// If no errors, submit the form
		if (
			!fullNameError.innerText &&
			!emailError.innerText &&
			!phoneError.innerText &&
			!passwordError.innerText &&
			!confirmPasswordError.innerText
		) {
			alert("Form submitted successfully");
			
		}
	});

function clearErrors() {
	document.getElementById("fullNameError").innerText = "";
	document.getElementById("emailError").innerText = "";
	document.getElementById("phoneError").innerText = "";
	document.getElementById("passwordError").innerText = "";
	document.getElementById("confirmPasswordError").innerText = "";
}
