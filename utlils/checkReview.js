


const nav_buttons = document.getElementsByClassName("step-trigger");

export function checkPersonalInfoSection() {
    const firstNameInput = document.getElementById("firstName");
    const firstNameLabel = document.querySelector('label[for="firstName"]');
    const firstName = firstNameInput.value;

    const lastNameInput = document.getElementById("lastName");
    const lastNameLabel = document.querySelector('label[for="lastName"]');
    const lastName = lastNameInput.value;

    const dobInput = document.getElementById("dob");
    const dobLabel = document.querySelector('label[for="dob"]');
    const dob = dobInput.value;

    const ssnInput = document.getElementById("ssn");
    const ssnLabel = document.querySelector('label[for="ssn"]');
    const ssn = ssnInput.value;

    var housingAssistanceOptions = document.querySelector('input[name="bqp"]:checked');


    if(housingAssistanceOptions.value === "yes"){
        // Check for dependant-firstName
        const dependantFirstName = document.getElementById("dependant-firstName");
        const dependantFirstNameLabel = document.querySelector('label[for="dependant-firstName"]');
        const reviewDependantFirstName = document.getElementById("reviewFirstName");

        if (dependantFirstName.value === "") {
        dependantFirstName.focus();
        
        dependantFirstNameLabel.style.fontWeight = "bold";
        throw new Error("Please enter the dependant first name");
        } else {
        reviewDependantFirstName.textContent = dependantFirstName.value;
        dependantFirstNameLabel.style.fontWeight = "normal"; // Reset label style
        }

        // Check for dependant-lastName
        const dependantLastName = document.getElementById("dependant-lastName");
        const dependantLastNameLabel = document.querySelector('label[for="dependant-lastName"]');
        const reviewDependantLastName = document.getElementById("reviewLastName");

        if (dependantLastName.value === "") {
        dependantLastName.focus();
        dependantLastNameLabel.style.fontWeight = "bold";
        throw new Error("Please enter the dependant last name");
        } else {
        reviewDependantLastName.textContent = dependantLastName.value;
        dependantLastNameLabel.style.fontWeight = "normal"; // Reset label style
        }

        // Check for dependant-dob
        const dependantDOB = document.getElementById("dependant-dob");
        const dependantDOBLabel = document.querySelector('label[for="dependant-dob"]');
        const reviewDependantDOB = document.getElementById("reviewDOB");

        if (dependantDOB.value === "") {
        dependantDOB.focus();
        dependantDOBLabel.style.fontWeight = "bold";
        throw new Error("Please enter the dependant date of birth");
        } else {
        const year = Number(dependantDOB.value.slice(6));
        const age = new Date().getFullYear() - year;

        if (document.getElementById("dob-error").textContent !== "" || year < 1900 ) {
            throw new Error("Please enter the dependant correct date of birth");
            return;
        }

        reviewDependantDOB.textContent = dependantDOB.value;
        dependantDOBLabel.style.fontWeight = "normal"; // Reset label style
        }

        // Check for dependant-ssn
        const dependantSSN = document.getElementById("dependant-ssn");
        const dependantSSNLabel = document.querySelector('label[for="dependant-ssn"]');
        const reviewDependantSSN = document.getElementById("reviewSSN");

        if (dependantSSN.value === "") {
        dependantSSN.focus();
        dependantSSNLabel.style.fontWeight = "bold";
        throw new Error("Please enter the dependant SSN");
        } else {
        reviewDependantSSN.textContent = dependantSSN.value.slice(12);
        dependantSSNLabel.style.fontWeight = "normal"; // Reset label style
        }


    }

    if (firstName == "") {
        firstNameInput.focus();
        firstNameInput.style.border = 
        firstNameLabel.style.fontWeight = "bold";
        throw new Error("Please enter the first name");
    } else {
        document.getElementById("reviewFirstName").textContent = firstName;
        firstNameLabel.style.fontWeight = "normal"; // Reset label style
    }

    if (lastName == "") {
        lastNameInput.focus();
        lastNameLabel.style.fontWeight = "bold";
        throw new Error("Please enter the last name");
    } else {
        document.getElementById("reviewLastName").textContent = lastName;
        lastNameLabel.style.fontWeight = "normal"; // Reset label style
    }

    if (dob == "") {
        dobInput.focus();
        dobLabel.style.fontWeight = "bold";
        throw new Error("Please enter the date of birth");
    } else {
        let year = Number(dob.slice(6));
        let age = new Date().getFullYear() - year;
        if (
        document.getElementById("dob-error").textContent !== "" ||
        year < 1900 ||
        age < 18
        ) {
        throw new Error("Please enter the correct date of birth");
        return;
        }
        document.getElementById("reviewDOB").textContent = dob;
        dobLabel.style.fontWeight = "normal"; // Reset label style
    }


    if (ssn === "XXX-XX-") {
        ssnInput.focus();
        ssnLabel.style.fontWeight = "bold";
        throw new Error("Please enter the SSN");
    } else {
        document.getElementById("reviewSSN").textContent = ssn.slice(7);
        ssnLabel.style.fontWeight = "normal"; // Reset label style
    }
}

export function checkContactInfoSection() {

    try {
        const reachMethodInput = document.querySelector(
        'input[name="reachMethod"]:checked'
        );
        const reachMethodLabel = document.querySelector(
            'label[for="' + reachMethodInput.id + '"]'
        );
        if (!reachMethodInput) {
            reachMethodLabel.style.fontWeight = "bold";
            reachMethodInput.focus();
        } else {
            document.getElementById("reviewReachMethod").textContent =
            reachMethodInput.value;
        }
    } catch (error) {
        throw new Error("Please select a Reach Method");
    }


    const phoneInput = document.getElementById("phone");
    const phoneLabel = document.querySelector('label[for="phone"]');
    const phone = phoneInput.value;

    if (phone == "") {
        phoneLabel.style.fontWeight = "bold";
        phoneInput.focus();
        throw new Error("Please enter the phone number");
    } else {
        document.getElementById("reviewPhone").textContent = phone;
    }

    const emailInput = document.getElementById("email");
    const emailLabel = document.querySelector('label[for="email"]');
    const email = emailInput.value;

    if (email == "") {
        emailLabel.style.fontWeight = "bold";
        emailInput.focus();
        throw new Error("Please enter the email address");
    } else {
        document.getElementById("reviewEmail").textContent = email;
    }

    try {
        const residentialAddressInput = document.querySelector(
            'input[name="residentialAddress"]:checked'
        );
        const residentialAddressLabel = document.querySelector(
            'label[for="' + residentialAddressInput.id + '"]'
        );
        if (!residentialAddressInput) {
            residentialAddressLabel.style.fontWeight = "bold";
            residentialAddressInput.focus();
        } else {
            document.getElementById("reviewResidentialAddress").textContent =
            residentialAddressInput.value;
        }
    } catch (error) {
        throw new Error("Please select a residential address");
    }
}

export function checkPaymentSection() {
    const creditCardNumberInput =
        document.getElementById("creditCardNumber");
    const creditCardNumberLabel = document.querySelector(
        'label[for="creditCardNumber"]'
    );
    const creditCardNumber = creditCardNumberInput.value;

    if (creditCardNumber == "") {
        creditCardNumberLabel.style.fontWeight = "bold";
        creditCardNumberInput.focus();
        throw new Error("Please enter the credit card number");
    } else {
        document.getElementById("reviewCreditCardNumber").textContent =
        creditCardNumber;
        creditCardNumberLabel.style.fontWeight = "normal"; // Reset label style
    }

    const firstNameOnCardInput = document.getElementById("firstNameOnCard");
    const firstNameOnCardLabel = document.querySelector(
        'label[for="firstNameOnCard"]'
    );
    const firstNameOnCard = firstNameOnCardInput.value;

    if (firstNameOnCard == "") {
        firstNameOnCardLabel.style.fontWeight = "bold";
        firstNameOnCardInput.focus();
        throw new Error("Please enter the first name on the card");
    } else {
        document.getElementById("reviewFirstNameOnCard").textContent =
        firstNameOnCard;
    }

    const cvvCodeInput = document.getElementById("cvvCode");
    const cvvCodeLabel = document.querySelector('label[for="cvvCode"]');
    const cvvCode = cvvCodeInput.value;

    if (cvvCode == "") {
        cvvCodeLabel.style.fontWeight = "bold";
        cvvCodeInput.focus();
        throw new Error("Please enter the CVV code");
    } else {
        document.getElementById("reviewCVVCode").textContent = cvvCode;
    }

    const lastNameOnCard = document.getElementById("lastNameOnCard");
    const lastNameOnCardLabel = document.querySelector(
        'label[for="lastNameOnCard"]'
    );
    const reviewLastNameOnCard = document.getElementById(
        "reviewLastNameOnCard"
    );

    const expDate = document.getElementById("expDate");
    const expDateLabel = document.querySelector('label[for="expDate"]');
    const reviewExpDate = document.getElementById("reviewExpDate");

    const addressOnCard = document.getElementById("addressOnCard");
    const addressOnCardLabel = document.querySelector(
        'label[for="addressOnCard"]'
    );
    const reviewAddressOnCard = document.getElementById(
        "reviewAddressOnCard"
    );

    const cityOnCard = document.getElementById("cityOnCard");
    const cityOnCardLabel = document.querySelector(
        'label[for="cityOnCard"]'
    );
    const reviewCityOnCard = document.getElementById("reviewCityOnCard");

    const zipCodeOnCard = document.getElementById("zipCodeOnCard");
    const zipCodeOnCardLabel = document.querySelector(
        'label[for="zipCodeOnCard"]'
    );
    const reviewZipCodeOnCard = document.getElementById(
        "reviewZipCodeOnCard"
    );

    if (lastNameOnCard.value == "") {
        lastNameOnCard.focus();
        lastNameOnCardLabel.style.fontWeight = "bold";
        throw new Error("Please enter the last name on the card");
    } else {
        reviewLastNameOnCard.textContent = lastNameOnCard.value;
        lastNameOnCardLabel.style.fontWeight = "normal";
    }

    if (expDate.value == "") {
        expDate.focus();
        expDateLabel.style.fontWeight = "bold";
        throw new Error("Please enter the expiration date");
    } else {
        reviewExpDate.textContent = expDate.value;
        expDateLabel.style.fontWeight = "normal";
    }

    const checkedRadioButton = document.querySelector('input[name="card-address"]:checked');
    if(checkedRadioButton.value !== "shipping-address"){
        // if (addressOnCard.value == "") {
        //     addressOnCard.focus();
        //     addressOnCardLabel.style.fontWeight = "bold";
        //     throw new Error("Please enter the billing address on the card");
        // } else {
        //     reviewAddressOnCard.textContent = addressOnCard.value;
        //     addressOnCardLabel.style.fontWeight = "normal";
        // }

        if (cityOnCard.value == "") {
            cityOnCard.focus();
            cityOnCardLabel.style.fontWeight = "bold";
            throw new Error("Please enter the billing city on the card");
        } else {
            reviewCityOnCard.textContent = cityOnCard.value;
            cityOnCardLabel.style.fontWeight = "normal";
        }

        if (zipCodeOnCard.value == "") {
            zipCodeOnCard.focus();
            zipCodeOnCardLabel.style.fontWeight = "bold";
            throw new Error("Please enter the billing ZIP code on the card");
        } else {
            reviewZipCodeOnCard.textContent = zipCodeOnCard.value;
            zipCodeOnCardLabel.style.fontWeight = "normal";
        }

        // Repeat similar checks for other fields...

        const stateOnCardInput = document.getElementById("stateOnCard");
        const stateOnCardLabel = document.querySelector(
            'label[for="stateOnCard"]'
        );
        const stateOnCard = stateOnCardInput.value;

        if (stateOnCard == "") {
            stateOnCardLabel.style.fontWeight = "bold";
            stateOnCardInput.focus();
            throw new Error("Please enter the billing state on the card");
        } else {
            document.getElementById("reviewStateOnCard").textContent =
            stateOnCard;
        }
    }

    
}
