// Create an array to store up to 10 submissions
let submissions = [];

document.getElementById('sub-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get input values
    const email = document.getElementById('email-input').value;
    const name = document.getElementById('name-input').value;
    const phoneNumber = document.getElementById('phn-no-input').value;
    const dob = document.getElementById('dob-input').value;
    const gender = document.getElementById('gender-input').value;
    const photo = document.getElementById('img-input').files[0]; // Image file

    // Clear previous validation error styles
    clearValidationErrors();

    // Validate the inputs
    let valid = true;

    // Validate email
    if (!email) {
        setInvalid('email-input', 'email-label');
        valid = false;
    } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setInvalid('email-input', 'email-label');
            valid = false;
        }
    }

    // Validate name
    if (!name) {
        setInvalid('name-input', 'name-label');
        valid = false;
    }

    // Validate phone number (Bangladesh specific validation)
    if (!phoneNumber || !/^(01[3-9])\d{8}$/.test(phoneNumber)) {
        setInvalid('phn-no-input', 'phn-no-label');
        valid = false;
    }

    // Validate date of birth
    const today = new Date();
    const birthDate = new Date(dob);
    if (!dob || birthDate >= today) {
        setInvalid('dob-input', 'dob-label');
        valid = false;
    }

    // Validate gender
    if (!gender) {
        setInvalid('gender-input', 'gender-label');
        valid = false;
    }

    // Validate photo
    if (!photo) {
        setInvalid('img-input', 'img-label');
        valid = false;
    }

    // If validation passes, show the result section and store data
    if (valid) {
        // Check if we already have 10 submissions
        if (submissions.length === 10) {
            // Remove the oldest entry if we have 10 submissions
            submissions.shift();  // Removes the first element (oldest submission)
        }

        // Add the new submission to the array
        submissions.push({ email, name, phoneNumber, dob, gender, photo });

        // Update the result section with the latest submission data
        updateResultSection(submissions.length);
    } else {
        alert('Please correct the highlighted fields.');
    }
});

// Function to update the result section
function updateResultSection(count) {
    const submission = submissions[count - 1]; // Get the latest submission
    const index = count; // To handle 1-based index for res-img-x and res-name-x

    // Update the result fields
    document.getElementById('res-name-' + index).textContent = submission.name;
    document.getElementById('res-email-' + index).textContent = submission.email;
    document.getElementById('res-phn-' + index).textContent = submission.phoneNumber;
    document.getElementById('res-dob-' + index).textContent = submission.dob;
    document.getElementById('res-gender-' + index).textContent = submission.gender;

    // If there's an image file, display it in the result
    const reader = new FileReader();
    reader.onload = function (e) {
        const resultImage = document.getElementById('res-img-' + index);
        resultImage.src = e.target.result;
    };
    reader.readAsDataURL(submission.photo);
}

// Function to set invalid input (with red border)
function setInvalid(inputId, labelId) {
    const inputField = document.getElementById(inputId);
    const labelField = document.getElementById(labelId);
    
    // Set red border for input field
    inputField.style.border = '2px solid red';

    // Set red color for label text
    labelField.style.color = 'red';
}

// Function to clear previous validation errors (remove red border and color)
function clearValidationErrors() {
    // Clear all input fields' invalid styles (red border)
    const inputs = document.querySelectorAll('.afi-box');
    inputs.forEach(input => {
        input.style.border = ''; // Remove border
    });

    // Clear all labels' invalid styles (red text color)
    const labels = document.querySelectorAll('.af-label');
    labels.forEach(label => {
        label.style.color = ''; // Remove red text color
    });
}
