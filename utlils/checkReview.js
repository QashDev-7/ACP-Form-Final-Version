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

  var housingAssistanceOptions = document.querySelector(
    'input[name="bqp"]:checked'
  );

  if (firstName == "") {
    firstNameInput.focus();
    firstNameInput.style.border = firstNameLabel.style.fontWeight = "bold";
    throw new Error("firstName"); // Change error message to include ID
  } else {
    document.getElementById("reviewFirstName").textContent = firstName;
    firstNameLabel.style.fontWeight = "normal"; // Reset label style
  }

  if (lastName == "") {
    lastNameInput.focus();
    lastNameLabel.style.fontWeight = "bold";
    throw new Error("lastName"); // Change error message to include ID
  } else {
    document.getElementById("reviewLastName").textContent = lastName;
    lastNameLabel.style.fontWeight = "normal"; // Reset label style
  }

  if (dob == "") {
    dobInput.focus();
    dobLabel.style.fontWeight = "bold";
    throw new Error("dob"); // Change error message to include ID
  } else {
    let year = Number(dob.slice(6));
    let age = new Date().getFullYear() - year;
    if (
      document.getElementById("dob-error").textContent !== "" ||
      year < 1900 ||
      age < 18
    ) {
      throw new Error("dob"); // Change error message to include ID
    }
    document.getElementById("reviewDOB").textContent = dob;
    dobLabel.style.fontWeight = "normal"; // Reset label style
  }

  if (ssn === "XXX-XX-") {
    ssnInput.focus();
    ssnLabel.style.fontWeight = "bold";
    throw new Error("ssn"); // Change error message to include ID
  } else {
    document.getElementById("reviewSSN").textContent = ssn.slice(7);
    ssnLabel.style.fontWeight = "normal"; // Reset label style
  }

  if (housingAssistanceOptions.value === "yes") {
    // Check for dependant-firstName
    const dependantFirstName = document.getElementById("dependant-firstName");
    const dependantFirstNameLabel = document.querySelector(
      'label[for="dependant-firstName"]'
    );
    const reviewDependantFirstName = document.getElementById(
      "reviewDependantFirstName"
    );

    if (dependantFirstName.value === "") {
      dependantFirstName.focus();

      dependantFirstNameLabel.style.fontWeight = "bold";
      throw new Error("dependant-firstName"); // Change error message to include ID
    } else {
      reviewDependantFirstName.textContent = dependantFirstName.value;
      dependantFirstNameLabel.style.fontWeight = "normal"; // Reset label style
    }

    // Check for dependant-lastName
    const dependantLastName = document.getElementById("dependant-lastName");
    const dependantLastNameLabel = document.querySelector(
      'label[for="dependant-lastName"]'
    );
    const reviewDependantLastName = document.getElementById(
      "reviewDependantLastName"
    );

    if (dependantLastName.value === "") {
      dependantLastName.focus();
      dependantLastNameLabel.style.fontWeight = "bold";
      throw new Error("dependant-lastName"); // Change error message to include ID
    } else {
      reviewDependantLastName.textContent = dependantLastName.value;
      dependantLastNameLabel.style.fontWeight = "normal"; // Reset label style
    }

    // Check for dependant-dob
    const dependantDOB = document.getElementById("dependant-dob");
    const dependantDOBLabel = document.querySelector(
      'label[for="dependant-dob"]'
    );
    const reviewDependantDOB = document.getElementById("reviewDependantDOB");

    if (dependantDOB.value === "") {
      dependantDOB.focus();
      dependantDOBLabel.style.fontWeight = "bold";
      throw new Error("dependant-dob"); // Change error message to include ID
    } else {
      const year = Number(dependantDOB.value.slice(6));
      const age = new Date().getFullYear() - year;

      if (
        document.getElementById("dob-error").textContent !== "" ||
        year < 1900
      ) {
        throw new Error("dependant-dob"); // Change error message to include ID
      }

      reviewDependantDOB.textContent = dependantDOB.value;
      dependantDOBLabel.style.fontWeight = "normal"; // Reset label style
    }

    // Check for dependant-ssn
    const dependantSSN = document.getElementById("dependant-ssn");
    const dependantSSNLabel = document.querySelector(
      'label[for="dependant-ssn"]'
    );
    const reviewDependantSSN = document.getElementById("reviewDependantSSN");

    if (dependantSSN.value === "") {
      dependantSSN.focus();
      dependantSSNLabel.style.fontWeight = "bold";
      throw new Error("dependant-ssn"); // Change error message to include ID
    } else {
      reviewDependantSSN.textContent = dependantSSN.value.slice(7);
      dependantSSNLabel.style.fontWeight = "normal"; // Reset label style
    }
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
      throw new Error("reachMethod"); // Change error message to include ID
    } else {
      document.getElementById("reviewReachMethod").textContent =
        reachMethodInput.value;
    }
  } catch (error) {
    throw new Error("reachMethod");
  }

  const phoneInput = document.getElementById("phone");
  const phoneLabel = document.querySelector('label[for="phone"]');
  const phone = phoneInput.value;

  if (phone == "") {
    phoneLabel.style.fontWeight = "bold";
    phoneInput.focus();
    throw new Error("phone"); // Change error message to include ID
  } else {
    document.getElementById("reviewPhone").textContent = phone;
  }

  const emailInput = document.getElementById("email");
  const emailLabel = document.querySelector('label[for="email"]');
  const email = emailInput.value;

  if (email == "") {
    emailLabel.style.fontWeight = "bold";
    emailInput.focus();
    throw new Error("email"); // Change error message to include ID
  } else {
    document.getElementById("reviewEmail").textContent = email;
  }

  const addressInput = document.getElementById("address");
  const addressLabel = document.querySelector('label[for="address"]');
  const addressErrorMessage = document.getElementById("address-error");
  const address = addressInput.value;

  if (address === "") {
    addressLabel.style.fontWeight = "bold";
    addressInput.focus();
    addressErrorMessage.textContent = "Address is required.";
    throw new Error("address");
  } else {
    // Your logic for a valid address goes here
    addressLabel.style.fontWeight = "normal"; // Reset label style
    addressErrorMessage.textContent = ""; // Clear any previous error message
  }

  const cityInput = document.getElementById("city");
  const cityLabel = document.querySelector('label[for="city"]');
  const city = cityInput.value;

  if (city === "") {
    cityLabel.style.fontWeight = "bold";
    cityInput.focus();
    throw new Error("city");
  } else {
    // Your logic for a valid city goes here
    cityLabel.style.fontWeight = "normal"; // Reset label style
  }

  const stateSelect = document.getElementById("state");
  const stateLabel = document.querySelector('label[for="state"]');
  const selectedState = stateSelect.value;

  if (selectedState === "Select A State") {
    stateLabel.style.fontWeight = "bold";
    stateSelect.focus();
    throw new Error("state");
  } else {
    // Your logic for a valid selected state goes here
    stateLabel.style.fontWeight = "normal"; // Reset label style
  }

  const zipCodeInput = document.getElementById("zipCode");
  const zipCodeLabel = document.querySelector('label[for="zipCode"]');
  const zipCodeErrorMessage = document.getElementById("zipCode-error");
  const zipCode = zipCodeInput.value;

  if (zipCode === "") {
    zipCodeLabel.style.fontWeight = "bold";
    zipCodeInput.focus();
    zipCodeErrorMessage.textContent = "Zip Code is required.";
    throw new Error("zipCode");
  } else {
    // Your logic for a valid zip code goes here
    zipCodeLabel.style.fontWeight = "normal"; // Reset label style
    zipCodeErrorMessage.textContent = ""; // Clear any previous error message
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
      throw new Error("residentialAddress"); // Change error message to include ID
    } else {
      document.getElementById("reviewResidentialAddress").textContent =
        residentialAddressInput.value;
    }
  } catch (error) {
    throw new Error("residentialAddress");
  }
}

export function checkPaymentSection() {
  const creditCardNumberInput = document.getElementById("creditCardNumber");
  const creditCardNumberLabel = document.querySelector(
    'label[for="creditCardNumber"]'
  );
  const creditCardNumber = creditCardNumberInput.value;

  if (creditCardNumber == "") {
    creditCardNumberLabel.style.fontWeight = "bold";
    creditCardNumberInput.focus();
    throw new Error("creditCardNumber"); // Change error message to include ID
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

  const cvvCodeInput = document.getElementById("cvvCode");
  const cvvCodeLabel = document.querySelector('label[for="cvvCode"]');
  const cvvCode = cvvCodeInput.value;

  const lastNameOnCard = document.getElementById("lastNameOnCard");
  const lastNameOnCardLabel = document.querySelector(
    'label[for="lastNameOnCard"]'
  );
  const reviewLastNameOnCard = document.getElementById("reviewLastNameOnCard");

  const expDate = document.getElementById("expDate");
  const expDateLabel = document.querySelector('label[for="expDate"]');
  const reviewExpDate = document.getElementById("reviewExpDate");

  const addressOnCard = document.getElementById("addressOnCard");
  const addressOnCardLabel = document.querySelector(
    'label[for="addressOnCard"]'
  );
  const reviewAddressOnCard = document.getElementById("reviewAddressOnCard");

  const cityOnCard = document.getElementById("cityOnCard");
  const cityOnCardLabel = document.querySelector('label[for="cityOnCard"]');
  const reviewCityOnCard = document.getElementById("reviewCityOnCard");
  const reviewAdrressOnCard = document.getElementById("reviewAddressOnCard");

  const zipCodeOnCard = document.getElementById("zipCodeOnCard");
  const zipCodeOnCardLabel = document.querySelector(
    'label[for="zipCodeOnCard"]'
  );
  const reviewZipCodeOnCard = document.getElementById("reviewZipCodeOnCard");

  if (expDate.value == "") {
    expDate.focus();
    expDateLabel.style.fontWeight = "bold";
    throw new Error("expDate"); // Change error message to include ID
  } else {
    reviewExpDate.textContent = expDate.value;
    expDateLabel.style.fontWeight = "normal";
  }

  if (cvvCode == "") {
    cvvCodeLabel.style.fontWeight = "bold";
    cvvCodeInput.focus();
    throw new Error("cvvCode"); // Change error message to include ID
  } else {
    document.getElementById("reviewCVVCode").textContent = cvvCode;
  }

  if (firstNameOnCard == "") {
    firstNameOnCardLabel.style.fontWeight = "bold";
    firstNameOnCardInput.focus();
    throw new Error("firstNameOnCard"); // Change error message to include ID
  } else {
    document.getElementById("reviewFirstNameOnCard").textContent =
      firstNameOnCard;
  }

  if (lastNameOnCard.value == "") {
    lastNameOnCard.focus();
    lastNameOnCardLabel.style.fontWeight = "bold";
    throw new Error("lastNameOnCard"); // Change error message to include ID
  } else {
    reviewLastNameOnCard.textContent = lastNameOnCard.value;
    lastNameOnCardLabel.style.fontWeight = "normal";
  }

  const checkedRadioButton = document.querySelector(
    'input[name="card-address"]:checked'
  );
  if (checkedRadioButton.value !== "shipping-address") {
    // if (addressOnCard.value == "") {
    //     addressOnCard.focus();
    //     addressOnCardLabel.style.fontWeight = "bold";
    //     throw new Error("addressOnCard"); // Change error message to include ID
    // } else {
    //     reviewAddressOnCard.textContent = addressOnCard.value;
    //     addressOnCardLabel.style.fontWeight = "normal";
    // }

    // Repeat similar checks for other fields...

    const stateOnCardInput = document.getElementById("stateOnCard");
    const stateOnCardLabel = document.querySelector('label[for="stateOnCard"]');

    const addressOnCardInput = document.getElementById("addressOnCard");
    const addressOnCardLabel = document.querySelector(
      'label[for="addressOnCard"]'
    );

    const stateOnCard = stateOnCardInput.value;

    if (addressOnCardInput.value == "") {
      addressOnCardInput.focus();
      addressOnCardInput.style.fontWeight = "bold";
      throw new Error("addressOnCard"); // Change error message to include ID
    } else {
      reviewAdrressOnCard.textContent = addressOnCard.value;
      addressOnCardLabel.style.fontWeight = "normal";
    }

    if (cityOnCard.value == "") {
      cityOnCard.focus();
      cityOnCardLabel.style.fontWeight = "bold";
      throw new Error("cityOnCard"); // Change error message to include ID
    } else {
      reviewCityOnCard.textContent = cityOnCard.value;
      cityOnCardLabel.style.fontWeight = "normal";
    }

    if (stateOnCard == "") {
      stateOnCardLabel.style.fontWeight = "bold";
      stateOnCardInput.focus();
      throw new Error("stateOnCard"); // Change error message to include ID
    } else {
      document.getElementById("reviewStateOnCard").textContent = stateOnCard;
    }

    if (zipCodeOnCard.value == "") {
      zipCodeOnCard.focus();
      zipCodeOnCardLabel.style.fontWeight = "bold";
      throw new Error("zipCodeOnCard"); // Change error message to include ID
    } else {
      reviewZipCodeOnCard.textContent = zipCodeOnCard.value;
      zipCodeOnCardLabel.style.fontWeight = "normal";
    }
  }
}
