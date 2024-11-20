const next = document.getElementById("sub-btn");
const emailLabel = document.getElementById("email-label");
let check = false;
let emails;
let numbers;
let names;
let dobs; 
let imgs;
let genders;

function validE(e) {
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
  }
  
  

next.addEventListener("click", function(){
    let e = document.getElementById("email-input").value.toString();
    if (validE(e)) {
        check = true;
        emails=e;
        document.getElementById("email-input").style.borderColor = "black";
        document.getElementById("email-label").style.color = "black";
        document.getElementById("email-span").style.color = "red";
        document.getElementById("email-input").value = "";
    }
     else {
        check = false;
        document.getElementById("email-input").style.borderColor = "red";
        document.getElementById("email-label").style.color = "red";
      }
});


function validate_bdnumber(number)
{
	pattern = /^\+?(88)?0(19|14|17|13|18|16|15)\d{8}$/
	return number.match(pattern) ? true : false;
}




next.addEventListener("click", function(){
    let number = document.getElementById("phn-no-input").value;
    if (validate_bdnumber(number)) {
        check = true;
        numbers=number;
        document.getElementById("phn-no-input").style.borderColor = "black";
        document.getElementById("phn-no-label").style.color = "black";
        document.getElementById("phn-no-span").style.color = "red";
        document.getElementById("phn-no-input").value = "";
    }
     else {
        check = false;
        document.getElementById("phn-no-input").style.borderColor = "red";
        document.getElementById("phn-no-label").style.color = "red";
      }
});

function isValidName(name) {
    // Check if the name is not empty and is between 2 and 50 characters
    if (name.trim() === "" || name.length < 2 || name.length > 50) {
        return false;
    }

    // Check if the name contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}



next.addEventListener("click", function(){
    let name = document.getElementById("name-input").value;
    if (isValidName(name)) {
        check = true;
        names= name;
        document.getElementById("name-input").style.borderColor = "black";
        document.getElementById("name-label").style.color = "black";
        document.getElementById("name-span").style.color = "red";
        document.getElementById("name-input").value = "";
    }
     else {
        check = false;
        document.getElementById("name-input").style.borderColor = "red";
        document.getElementById("name-label").style.color = "red";
      }
});


function isValidDOB(dateOfBirth) {
    // Check if the date of birth is blank
    if (!dateOfBirth) {
        return false;
    }

    // If the date of birth is not blank, return true
    return true;
}

next.addEventListener("click", function(){
        let dateOfBirth = document.getElementById("dob-input").value;
    if (isValidDOB(dateOfBirth)) {
        check = true;
        dobs = dateOfBirth;
        document.getElementById("dob-input").style.borderColor = "black";
        document.getElementById("dob-label").style.color = "black";
        document.getElementById("dob-span").style.color = "red";
        document.getElementById("dob-input").value = "";
    }
     else {
        check = false;
        document.getElementById("dob-input").style.borderColor = "red";
        document.getElementById("dob-label").style.color = "red";
      }
});



function validateGender(selectId) {
    // Get the value of the selected option from the select element using the provided ID
    const genderSelect = document.getElementById(selectId);
    const selectedGender = genderSelect.value;

    // Check if a valid option has been selected
    if (selectedGender === "") {
        // If no valid selection, return false
        return false;
    }
    
    // If a valid selection has been made, return true
    return true;
}

next.addEventListener("click", function(){
if (validateGender('gender-input')) {
    check = true;
    document.getElementById("gender-input-1").value.toString() = genders;
    document.getElementById("gender-input").style.borderColor = "black";
    document.getElementById("gender-label").style.color = "black";
    document.getElementById("gender-span").style.color = "red";
    document.getElementById("gender-input").value = "";
}
 else {
    check = false;
    document.getElementById("gender-input").style.borderColor = "red";
    document.getElementById("gender-label").style.color = "red";
  }
});




next.addEventListener("click", function() {
    // Check if the file input element exists
    const imgInput = document.getElementById("img-input");
    const imgLabel = document.getElementById("img-label");
    const imgSpan = document.getElementById("img-span");

    // Ensure imgInput exists
    if (imgInput && imgInput.files.length > 0) {
        // If a file is selected, set check to true and store the image
        check = true;
        imgs = imgInput.files[0]; // Store the first uploaded image
        imgInput.style.borderColor = "black";
        imgLabel.style.color = "black";
        imgSpan.style.color = "red";
        const file = imgInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            imgs = e.target.result; // Set imgs to the base64 data URL
            document.getElementById("res-img-1").src = imgs; // Update image source
        };
        reader.readAsDataURL(file);

        // Optional: Remove value reset, since this may conflict
        // imgInput.value = ""; // Remove this line unless you want to reset input
    } else {
        // If no file is selected, set check to false
        check = false;
        imgInput.style.borderColor = "red";
        imgLabel.style.color = "red";
    }
});



    next.addEventListener("click", function() {
        let count = 0;
        if(check==true){
            for (let i = 0; i<10; i++){
                if(count==0){
                    document.getElementById("res-name-1").innerText = names;
                    document.getElementById("res-email-1").innerText = emails;
                    document.getElementById("res-phn-1").innerText = numbers;
                    document.getElementById("res-dob-1").innerText = dobs;
                    document.getElementById("res-gender-1").innerText = genders; 
                    document.getElementById("res-img-1").src = imgs;
                    count = count+1;
                    break;
                }
            }
        }});
    


