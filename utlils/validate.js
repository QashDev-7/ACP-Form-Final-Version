import { handleNextButtonClick } from "../index.js";

function validate(){
    function validateDOB() {
        const dobInput = document.getElementById("dob");
        handleValidateDOB(dobInput,true)
    }

    function validateDependantDOB() {
        const dobInput = document.getElementById("dependant-dob");
        handleValidateDOB(dobInput,false)
    }

    function handleValidateDOB(dob,flag){
        const dobInput = dob
        const dobValue = dobInput.value;    
            // Regular expression to match MM/DD/YYYY format
        const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    
        if (!dobRegex.test(dobValue)) {
            dobInput.nextElementSibling.textContent =
            "Invalid date format (MM/DD/YYYY)";
            dobInput.focus();
            return false;
        } else {
            const dobParts = dobValue.split("/");
            const year = parseInt(dobParts[2], 10);
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
    
            if (year < 1900) {
            dobInput.nextElementSibling.textContent =
                "Year of birth must be greater than 1900";
            dobInput.focus();
            return false;
            }
    

            if(flag){
                const age = currentYear - year;
                if (age < 18) {
                dobInput.nextElementSibling.textContent =
                    "Age must be greater than 18";
                dobInput.focus();
                return false;
                }
            }
    
            dobInput.nextElementSibling.textContent = "";
            return true;
        }
    }

    function formatDOB(e) {
    let input = e.target;
    let dob = input.value.replace(/\D/g, "");

    if (dob.length > 2) {
        dob = dob.slice(0, 2) + "/" + dob.slice(2);
    }
    if (dob.length > 5) {
        dob = dob.slice(0, 5) + "/" + dob.slice(5);
    }

    if (dob.length > 10) {
        dob = dob.slice(0, 10);
    }

    input.value = dob;
    }

    // Function to validate Last 4 digits of SSN
    function validateSSN(event) {
        const ssnInput = event.target;
        const ssnValue = ssnInput.value;
    
        // Regular expression to match exactly 4 digits
        const ssnRegex = /^(XXX-XX-)\d{4}$/;
    
        if (!ssnRegex.test(ssnValue)) {
            ssnInput.nextElementSibling.textContent =
            "Invalid SSN format (XXX-XX-1234)";
            ssnInput.focus();
            return false;
        } else {
            ssnInput.nextElementSibling.textContent = "";
            return true;
        }
    }

    // Function to validate the entire personal information form
    function validatePersonalInfo() {
    return validateDOB() && validateSSN();
    }

    // Attach validation functions to the input fields' events
    document.getElementById("dob").addEventListener("blur", validateDOB);
    document.getElementById("dependant-dob").addEventListener("blur", validateDependantDOB);
    document.getElementById("dob").addEventListener("input", formatDOB);
    document.getElementById("dependant-dob").addEventListener("input", formatDOB);
    document.getElementById("ssn").addEventListener("blur", validateSSN);
    document.getElementById("dependant-ssn").addEventListener("blur", validateSSN);

    // Function to validate phone number format (XXX-XXX-XXXX)
    function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phoneValue = phoneInput.value;

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!phoneRegex.test(phoneValue)) {
        document.getElementById("phone-error").textContent =
        "Invalid phone format (XXX-XXX-XXXX)";
        phoneInput.focus();
        return false;
    } else {
        document.getElementById("phone-error").textContent = "";
        return true;
    }
    }

    // Function to validate email format
    function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    // Regular expression for a basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        document.getElementById("email-error").textContent =
        "Invalid email format";
        emailInput.focus();
        return false;
    } else {
        document.getElementById("email-error").textContent = "";
        return true;
    }
    }

    // Function to validate zip code (5 digits)
    function validateZipCode() {
    const zipCodeInput = document.getElementById("zipCode");
    const zipCodeValue = zipCodeInput.value;

    // Regular expression to match exactly 5 digits
    const zipCodeRegex = /^\d{5}$/;

    if (!zipCodeRegex.test(zipCodeValue)) {
            document.getElementById("zipCode-error").textContent =
            "Invalid zip code format (5 digits)";
            zipCodeInput.focus();
            return false;
        } else {
            document.getElementById("zipCode-error").textContent = "";
            return true;
        }
    }

    function formateZipCode(event) {
    const zipCodeInput = document.getElementById("zipCode");
    // Remove any non-numeric characters
    const cleanedValue = event.target.value.replace(/\D/g, "");

    // Ensure the value is no longer than 5 characters
    const maskedValue = cleanedValue.slice(0, 5);

    // Update the input field with the masked value
    zipCodeInput.value = maskedValue;
    }

    function formatPhoneNumber(e) {
    let input = e.target;
    let phoneNumber = input.value.replace(/\D/g, "");

    if (phoneNumber.length > 3) {
        phoneNumber = phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3);
    }
    if (phoneNumber.length > 7) {
        phoneNumber = phoneNumber.slice(0, 7) + "-" + phoneNumber.slice(7);
    }

    if (phoneNumber.length > 12) {
        phoneNumber = phoneNumber.slice(0, 12);
    }

    input.value = phoneNumber;
    }

    // Function to validate the entire contact information form
    function validateContactInfo() {
    return validatePhone() && validateEmail() && validateZipCode();
    }

    // Attach validation functions to the input fields' events
    document.getElementById("phone").addEventListener("blur", validatePhone);
    document
    .getElementById("phone")
    .addEventListener("input", formatPhoneNumber);
    document.getElementById("email").addEventListener("blur", validateEmail);
    document
    .getElementById("zipCode")
    .addEventListener("blur", validateZipCode);
    document
    .getElementById("zipCode")
    .addEventListener("input", formateZipCode);

    // Function to validate the credit card number
    function validateCreditCardNumber() {
    const creditCardNumberInput =
        document.getElementById("creditCardNumber");
    const creditCardNumberValue = creditCardNumberInput.value;

    // Regular expression to match a valid credit card number
    const creditCardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    const cardNumberRegex = /^\d{4} \d{6} \d{5}$/;

    if (!creditCardNumberRegex.test(creditCardNumberValue) && !cardNumberRegex.test(creditCardNumberValue)) {
        document.getElementById("creditCardNumber-error").textContent =
        "Invalid credit card number";
        creditCardNumberInput.focus();
        return false;
    } else {
        document.getElementById("creditCardNumber-error").textContent = "";
        return true;
    }
    }

    function formatCreditCardNumber(e) {
        let input = e.target;
        let cardNumber = input.value.replace(/\D/g, ""); // Remove non-numeric characters

        let cardType = getCardType(cardNumber);
        if (cardNumber.length >= 1) {

            if (cardType !== 'unknown') {
            displayCardIcon(cardType);
            } else {
            // If the card type is unknown, clear the card icon
            displayCardIcon(null);
            }
        } else {
            displayCardIcon(null); // Clear the card icon when no digits are entered
        }

        

        if (cardType === 'amex') {
            if (cardNumber.length > 4) {
                cardNumber = cardNumber.slice(0, 4) + " " + cardNumber.slice(4);
            }
            if (cardNumber.length > 11) {
                cardNumber = cardNumber.slice(0, 11) + " " + cardNumber.slice(11);
            }
        
            if (cardNumber.length > 17) {
                cardNumber = cardNumber.slice(0, 17);
            }
        } else {
            if (cardNumber.length > 4) {
                cardNumber = cardNumber.match(/.{1,4}/g).join(" "); // Add spaces to group numbers
            }
            if (cardNumber.length > 19) {
                cardNumber = cardNumber.slice(0, 19);
            }
        }
        input.value = cardNumber;
    }


        // Function to identify card type
    function getCardType(cardNumber) {
        const firstDigit = cardNumber.charAt(0);

        if (firstDigit === '4') {
            return 'visa';
        } else if (firstDigit === '5') {
            return 'mastercard';
        } else if (firstDigit === '3') {
            // Check the second digit for American Express
            const secondDigit = cardNumber.charAt(1);
            if (secondDigit === '4' || secondDigit === '7') {
                document.getElementById("cvvCode").placeholder = "XXXX"
            return 'amex';
            } else {
                document.getElementById("cvvCode").placeholder = "XXXX"
            return 'unknown';
            }
        } else if (firstDigit === '6') {
            // Check the second digit for Discover
            const secondDigit = cardNumber.charAt(1);
            if (secondDigit === '0' || secondDigit === '1' || (secondDigit >= '4' && secondDigit <= '9')) {
            return 'discover';
            } else {
            return 'unknown';
            }
        } else {
            return 'unknown';
        }
    }

    

        // Function to display card icon
    // Function to display card icon with color
function displayCardIcon(cardType) {
  const cardIconContainer = document.getElementById('cardIconContainer');
  cardIconContainer.innerHTML = ''; // Clear existing icons

  if (cardType) {
    const cardIcon = document.createElement('i');

    // Set the Font Awesome class based on the card type
    let iconClass = '';
    let iconColor = ''; // Define the icon color here

    switch (cardType) {
      case 'visa':
        iconClass = 'fab fa-cc-visa'; // Font Awesome class for Visa
        iconColor = '#0074CC'; // Example color for Visa
        break;
      case 'mastercard':
        iconClass = 'fab fa-cc-mastercard'; // Font Awesome class for MasterCard
        iconColor = '#FF6C00'; // Example color for MasterCard
        break;
      case 'amex':
        iconClass = 'fab fa-cc-amex'; // Font Awesome class for American Express
        iconColor = '#0073B2'; // Example color for American Express
        break;
      case 'discover':
        iconClass = 'fab fa-cc-discover'; // Font Awesome class for Discover
        iconColor = '#FFCD00'; // Example color for Discover
        break;
    }

    if (iconClass) {
      cardIcon.className = iconClass;
      cardIcon.style.color = iconColor; // Apply the icon color
      cardIconContainer.appendChild(cardIcon);
    }
  }
}




    // Function to validate the CVV code
    function validateCVVCode() {
        const cvvCodeInput = document.getElementById("cvvCode");
        const cvvCodeValue = cvvCodeInput.value;

        // Regular expression to match a valid CVV code (3 or 4 digits)

        const selector = document.getElementsByClassName("fab")[0]
        let cvvCodeRegex = null
        try {
            if(selector.className.slice(10) === "amex"){
                cvvCodeRegex = /^\d{4}$/;
            }else{
                cvvCodeRegex = /^\d{3}$/;
            }

            if (!cvvCodeRegex.test(cvvCodeValue)) {
                document.getElementById("cvvCode-error").textContent =
                "Invalid CVV code";
                cvvCodeInput.focus();
                return false;
            } else {
                document.getElementById("cvvCode-error").textContent = "";
                return true;
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    function validateCVVFormat(e) {
        let input = e.target;
        let length = 3;
        let cvv = input.value.replace(/\D/g, "");

        const selector = document.getElementsByClassName("fab")[0]

        try {
            if(selector.className.slice(10) === "amex"){
                length = 4;
            }    
        } catch (error) {
            console.log(error.message)
        }
        if (cvv.length > length) {
            cvv = cvv.slice(0, length);
        }

        input.value = cvv;
    }

    // Function to validate the expiration date (MM/YYYY)
    function validateExpDate() {
        const expDateInput = document.getElementById("expDate");
        const expDateValue = expDateInput.value;

        // Regular expression to match a valid MM/YYYY date format
        const expDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
        const dobParts = expDateValue.split("/");
        const month = parseInt(dobParts[0], 10);
        const year = parseInt(dobParts[1], 10);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed, so add 1 to get the current month.

        if (!expDateRegex.test(expDateValue)) {
        document.getElementById("expDate-error").textContent = "Invalid expiration date format (MM/YYYY)";
        expDateInput.focus();
        return false;
        } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
        document.getElementById("expDate-error").textContent = "Expiration date must be in the Future";
        expDateInput.focus();
        return false;
        } else {
        document.getElementById("expDate-error").textContent = "";
        return true;
        }

    }

    function formatExpirationDate(e) {
    let input = e.target;
    let expDate = input.value.replace(/\D/g, "");

    // Insert a slash to format as "MM/YYYY"
    if (expDate.length > 2) {
        expDate = expDate.slice(0, 2) + "/" + expDate.slice(2);
    }

    // Limit the input to the expected length of "MM/YYYY"
    if (expDate.length > 7) {
        expDate = expDate.slice(0, 7);
    }

    input.value = expDate;
    }

    // Function to validate the entire Device Copay Payment form
    function validateCopayPayment() {
    return (
        validateCreditCardNumber() && validateCVVCode() && validateExpDate()
        // Add more validation functions as needed
    );
    }

    // Attach validation functions to the input fields' events
    document
    .getElementById("creditCardNumber")
    .addEventListener("blur", validateCreditCardNumber);
    document
    .getElementById("creditCardNumber")
    .addEventListener("input", formatCreditCardNumber);
    document
    .getElementById("cvvCode")
    .addEventListener("blur", validateCVVCode);
    document
    .getElementById("cvvCode")
    .addEventListener("input", validateCVVFormat);
    document
    .getElementById("expDate")
    .addEventListener("blur", validateExpDate);
    document
    .getElementById("expDate")
    .addEventListener("input", formatExpirationDate);

    document
    .getElementById("enrollment-form")
    .addEventListener("submit", function (event) {
        if (!validateForm(false)) {
        event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateRadioButtonSelection() {
    var eligibilityRadioButtons = document.querySelectorAll(
        'input[name="eligibility"]'
    );
    for (var i = 0; i < eligibilityRadioButtons.length; i++) {
        if (eligibilityRadioButtons[i].checked) {
        return true; // At least one option is selected
        }
    }
    return false; // No option is selected
    }

    document.querySelector("div.form-button:nth-child(5) > input:nth-child(2)").addEventListener("click",validateAdditionalInfo)

    function validateAdditionalInfo(event) {
    var selectedEligibility = document.querySelector(
        'input[name="eligibility"]:checked'
    ).value;

    if (selectedEligibility === "FPHA") {
        var housingAssistanceOptions = document.querySelectorAll(
        'input[name="housingAssistance"]'
        );

        let flag = true;
        // Check if at least one housing assistance option is selected
        for (var i = 0; i < housingAssistanceOptions.length; i++) {
        if (housingAssistanceOptions[i].checked) {
             flag = false
            handleNextButtonClick(event);
        }
    }
    if(flag){
            alert("Please Select an Housing Assitance option");
    }
        
    } else if (
        selectedEligibility === "SchoolLunch" ||
        selectedEligibility === "PellGrant"
    ) {
        var schoolNameInput = document.getElementById("schoolName");
        var schoolNameValue = schoolNameInput.value.trim();
        if(schoolNameValue !== ""){
            handleNextButtonClick(event);
            document.getElementById("bqp-details").style.display = "flex"
        }else {
            alert("Please Enter the School Name")
        }
    } else if (selectedEligibility === "IncomeQualify") {
        var householdSizeInput = document.getElementById("householdSize");
        var householdSizeValue = householdSizeInput.value.trim();
        if(!isNaN(householdSizeValue) && householdSizeValue !== ""){
            handleNextButtonClick(event);
        }else{
            alert("Please Enter the correct House Hold size")
        }
    }

    // No additional validation required for other eligibility options
    }

    const firstNextBtn = document.getElementsByClassName("first-next-btn")[0]
    firstNextBtn.addEventListener("click",(event)=>{
        const testType = document.getElementById("options").value
        if(testType === ""){
            document.getElementById("test-error").textContent = "Please Select an Option from list"
        }else{
            handleNextButtonClick(event)
        }
    })

    document.getElementById("options").addEventListener("change",()=>{
        document.getElementById("test-error").textContent = ""
    })


    var eligibilityRadioButtons = document.querySelectorAll(
    'input[name="eligibility"]'
    );

    var eligibilityRadioButtons = document.querySelectorAll(
    'input[name="eligibility"]'
    );

    // for (var i = 0; i < eligibilityRadioButtons.length; i++) {
    // // eligibilityRadioButtons[i].addEventListener("change");
    // }

    document
    .getElementById("first-radio")
    .addEventListener("change", function (event) {
        var additionalInfo = document.getElementById("additional-info");

        // If the first radio button is checked, show the "additional-info" div, otherwise, hide it
        if (this.checked) {
        additionalInfo.style.display = "block";
        }
    });


        // Function to handle changes for all radio buttons
    function handleRadioChange(event) {
    const selectedValue = event.target.value;
    const container = this.parentElement.parentElement;
    
    const labels = this.parentElement.parentElement.children;

    for(let btn of labels){
        btn.style["border-color"] = "rgb(227, 227, 227)"
    }

    event.target.parentElement.style["border-color"] = "#6786C2"
    const buttonContainer =  this.parentElement.parentElement.parentElement.getElementsByClassName("add-form-button")[0];
    switch (selectedValue) {
        case 'FPHA':
            container.style.display = "none"
            buttonContainer.style.display = "flex"
            buttonContainer.nextElementSibling.style.display = "none"
            break;
        case 'SchoolLunch':
            container.style.display = "none"
            buttonContainer.style.display = "flex"
            buttonContainer.nextElementSibling.style.display = "none"
            document.getElementById("yes").click();
        showSchoolNameField();
        break;
        case 'Medicaid':
        case 'SNAP':
        case 'SSI':
        case 'VeteransPension':
        case 'WIC':
        hideAboveButton();
        break;
        case 'IncomeQualify':
            container.style.display = "none"
            buttonContainer.style.display = "flex"
            buttonContainer.nextElementSibling.style.display = "none"
        showIncomeQualifySection();
        break;
        case 'PellGrant':
            container.style.display = "none"
            buttonContainer.style.display = "flex"
            buttonContainer.nextElementSibling.style.display = "none"
        showPellGrantSection();
        break;
        // Add more cases as needed
        default:
        // Handle any other cases or provide a default behavior
        break;
    }
    }

    // Get all radio buttons with the name "eligibility"
    const radioButtons = document.querySelectorAll('input[name="eligibility"]');

    // Add event listeners to all radio buttons
    radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', handleRadioChange);
    });

    
    function hideAboveButton() {
        var additionalInfo = document.getElementById("additional-info");
        var schoolNameField = document.getElementById("school-name-field");
        var householdInfo = document.getElementById("household-info");
    
        additionalInfo.style.display = "none";
        schoolNameField.style.display = "none";
        householdInfo.style.display = "none";
        }
    
        function showIncomeQualifySection() {
        var additionalInfo = document.getElementById("additional-info");
        var schoolNameField = document.getElementById("school-name-field");
        var householdInfo = document.getElementById("household-info");
        var incomeQualifyRadio = document.querySelector(
            'input[name="eligibility"][value="IncomeQualify"]'
        );
    
        if (incomeQualifyRadio.checked) {
            additionalInfo.style.display = "none";
            schoolNameField.style.display = "none";
            householdInfo.style.display = "block";
        } else {
            additionalInfo.style.display = "none";
            schoolNameField.style.display = "none";
            householdInfo.style.display = "none";
        }
        }
    
        function showPellGrantSection() {
        var additionalInfo = document.getElementById("additional-info");
        var schoolNameField = document.getElementById("school-name-field");
        var householdInfo = document.getElementById("household-info");
        var pellGrantRadio = document.querySelector(
            'input[name="eligibility"][value="PellGrant"]'
        );
    
        if (pellGrantRadio.checked) {
            additionalInfo.style.display = "none";
            schoolNameField.style.display = "block";
            householdInfo.style.display = "none";
        } else {
            additionalInfo.style.display = "none";
            schoolNameField.style.display = "none";
            householdInfo.style.display = "none";
        }
    }

    const input_fields = document.getElementsByClassName("form-input");
    for (let lab of input_fields) {
        lab.addEventListener("focus", handleFocusLabel);
        lab.addEventListener("blur", handleBlurLabel);
    }

    function handleFocusLabel(e) {
        e.target.previousElementSibling.style.fontWeight = "bold";
    }

    function handleBlurLabel(e) {
        e.target.previousElementSibling.style.fontWeight = "normal";
    }

    const ssnInput = document.getElementById("ssn");

    ssnInput.addEventListener("input", formattedSSN);
    ssnInput.addEventListener("click", formattedSSN);
    function formattedSSN() {
        // Remove non-digit characters and limit the input to 4 characters
        let sanitizedInput = ssnInput.value.replace(/\D/g, "").substring(0, 4);
    
        // Format the input as XXX-XXX-XXX-1234
        let formattedSSN = "XXX-XX-" + sanitizedInput;
    
        ssnInput.value = formattedSSN;
        }

    const sssnInput = document.getElementById("dependant-ssn");
    function dependantSSN() {
        // Remove non-digit characters and limit the input to 4 characters
        let sanitizedInput = sssnInput.value.replace(/\D/g, "").substring(0, 4);
    
        // Format the input as XXX-XXX-XXX-1234
        let formattedSSN = "XXX-XX-" + sanitizedInput;
    
        sssnInput.value = formattedSSN;
        }
    sssnInput.addEventListener("click",dependantSSN)

    sssnInput.addEventListener("input", dependantSSN);

        
    document.querySelector('input[name="bqp"]').addEventListener("click",showBqpDetails)
    function showBqpDetails() {
    var bqpDetails = document.getElementById("bqp-details");
        bqpDetails.style.display = "block";
    }

    document.querySelectorAll('input[name="bqp"]')[1].addEventListener("click",hideBqpDetails)

    function hideBqpDetails() {
        var bqpDetails = document.getElementById("bqp-details");
    bqpDetails.style.display = "none";
    }

    function showSchoolNameField() {
        hideAboveButton();
        var schoolNameField = document.getElementById("school-name-field");
        schoolNameField.style.display = "block";
        schoolNameField.querySelector("input").required = true; // Make School Name required
        hideBqpDetails(); // Hide BQP details initially
    }

    function validateForm() {
        const form = document.getElementById("personal-info-form");
        if (form.checkValidity()) {
            // Show the success popup
            const popup = document.getElementById("success-popup");
            popup.style.display = "flex";

            // Optionally, you can submit the form here if needed

            // Close the popup after a certain time (e.g., 3 seconds)
            setTimeout(() => {
            popup.style.display = "none";
            }, 3000);
        } else {
            alert("Please fill in all required fields and correct any errors.");
        }
    }
    // Add an event listener to the form's submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function (e) {
    // Prevent the form from submitting (we will handle submission in validateForm)
    e.preventDefault();

    // Call the validateForm function
    validateForm(false);
    });
    
        // function validateForm() {
        //   // Get all the input elements with the "required" attribute
        //   const requiredInputs = document.querySelectorAll("input[required]");
        //   let isValid = true;
    
        //   // Check if any of the required fields are empty
        //   requiredInputs.forEach((input) => {
        //     if (input.value.trim() === "") {
        //       isValid = false;
        //     }
        //   });
    
        //   if (isValid) {
        //     // All required fields are filled, show the success message
        //     alert("Form submitted");
        //   } else {
        //     // Some required fields are empty, show the error message
        //     alert("Please fill in all required fields");
        //   }
        // }
}


export default validate;