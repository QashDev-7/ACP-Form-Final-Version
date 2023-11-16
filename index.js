import validate from "./utlils/validate.js";
import {
  checkPaymentSection,
  checkContactInfoSection,
  checkPersonalInfoSection,
} from "./utlils/checkReview.js";

const next_btn = document.getElementsByClassName("next-btn");
for (let btn of next_btn) {
  btn.addEventListener("click", handleNextButtonClick);
}

validate();

function checkDisclosure() {
  if (!document.getElementById("Disclosure").checked) {
    throw new Error("diclosre-terms");
  }
}

// New function to check if at least one eligibility option is selected
function validateEligibility() {
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

function NextButtonClick(event) {
  if (!validateEligibility()) {
    document.getElementById("elgibility-error").innerText =
      "Please select an eligibility option.";
  } else {
    document.getElementById("elgibility-error").innerText = "";
    handleNextButtonClick(event);
  }
}

function cardAddress() {
  if (document.getElementById("shipping-address").checked === true) {
    document.getElementById("other-card-address").style.display = "none";
    let content = `${document.getElementById("address").value}, ${
      document.getElementById("aptFloorOther").value
    },  ${document.getElementById("city").value}, ${
      document.getElementById("state").value
    }, ${document.getElementById("zipCode").value}`;

    document.getElementById("card-address-value").textContent = content;
    document.getElementById("reviewAddressOnCard").textContent =
      document.getElementById("address").value;
    document.getElementById("reviewCityOnCard").textContent =
      document.getElementById("city").value;
    document.getElementById("reviewStateOnCard").textContent =
      document.getElementById("state").value;
    document.getElementById("reviewZipCodeOnCard").textContent =
      document.getElementById("zipCode").value;
  } else {
    document.getElementById("card-address-value").textContent = "";
  }
}

document.getElementById("other-address").addEventListener("change", (event) => {
  if (event.target.checked === true) {
    document.getElementById("other-card-address").style.display = "flex";
    document.getElementById("card-address-value").textContent = "";
    document.getElementById("reviewAddressOnCard").value = "";
    document.getElementById("reviewCityOnCard").value = "";
    document.getElementById("reviewStateOnCard").value = "";
    document.getElementById("reviewZipCodeOnCard").value = "";
  } else {
    document.getElementById("other-card-address").style.display = "none";
  }
});

document
  .getElementById("shipping-address")
  .addEventListener("change", cardAddress);
document.querySelector(".enext-btn").addEventListener("click", NextButtonClick);

const diamondJozu = (id) => {
  const element = document.getElementById(id);
  if (!element.nextElementSibling) {
    const spanError = document.createElement("span");
    spanError.className = "error-message";
    spanError.innerText = `Please Fill the required field: ${element.previousElementSibling.innerText}`;
    element.insertAdjacentElement("afterend", spanError);
  } else {
    element.nextElementSibling.innerText = `Please Fill the required field: ${element.previousElementSibling.innerText}`;
  }
};

function handleNextButtonClick(e) {
  const next_section =
    e.target.parentElement.parentElement.parentElement.nextElementSibling;

  try {
    if (next_section.firstElementChild.textContent === "Contact") {
      checkPersonalInfoSection();
    } else if (next_section.firstElementChild.textContent === "Disclosure") {
      checkContactInfoSection();
    } else if (next_section.firstElementChild.textContent === "Payment") {
      cardAddress();
      checkDisclosure();
    }
  } catch (error) {
    diamondJozu(error.message);
    return;
  }

  const reachMethodInput = document.querySelectorAll(
    'input[name="reachMethod"]'
  );
  const residentialAddress = document.querySelectorAll(
    'input[name="residentialAddress"]'
  );

  const removeSpanText = () => {
    document.getElementById("reachMethod").nextElementSibling.innerText = "";
  };

  const removeSpanText2 = () => {
    document.getElementById("residentialAddress").nextElementSibling.innerText =
      "";
  };

  for (let reach of reachMethodInput) {
    reach.addEventListener("click", removeSpanText);
  }
  for (let reach of residentialAddress) {
    reach.addEventListener("click", removeSpanText2);
  }

  next_section.style.display = "block";

  const nav_buttons = document.getElementsByClassName("step-trigger");

  e.target.parentElement.parentElement.parentElement.style.display = "none";

  if (
    next_section.firstElementChild.textContent === "Processing" ||
    next_section.firstElementChild.textContent === "Review"
  ) {
    const submit_btn = document.getElementById("submit-button");
    submit_btn.style.display = "block";
  }

  for (let btn of nav_buttons) {
    if (
      btn.children[1].textContent == next_section.firstElementChild.textContent
    ) {
      if (window.screen.width < 500) {
        btn.previousElementSibling.previousElementSibling.style.display =
          "none";
        btn.style.display = "block";
      }
      btn.previousElementSibling.style.color = "#7CCD44";
      btn.getElementsByTagName("svg")[0].setAttribute("fill", "#7CCD44");
      btn.children[1].style.color = "#7CCD44";
    }
    btn.addEventListener("click", handleStep);
  }
}

const previous_btn = document.getElementsByClassName("previous-btn");
document
  .getElementsByClassName("add-previous-btn")[0]
  .addEventListener("click", (event) => {
    const submit_btn = document.getElementById("no");
    submit_btn.click();
    document.getElementById("elgibility-error").innerText = "";
    const divContainer =
      document.getElementsByClassName("eligibiliy-form")[0].firstElementChild;
    divContainer.style.display = "block";
    const container = event.target.parentElement.nextElementSibling;
    container.style.display = "flex";
    event.target.parentElement.style.display = "None";
    var selectedEligibility = document.querySelector(
      'input[name="eligibility"]:checked'
    );
    const dummyValue = divContainer.querySelector("label:nth-child(3)>input");
    dummyValue.click();
    selectedEligibility.checked = true;
    selectedEligibility.parentElement.style["border-color"] = "#6786C2";
    dummyValue.parentElement.style["border-color"] = "rgb(227, 227, 227)";
  });

for (let btn of previous_btn) {
  btn.addEventListener("click", handlePreviousButtonClick);
}

function handlePreviousButtonClick(e) {
  const prevoius_section =
    e.target.parentElement.parentElement.parentElement.previousElementSibling;

  const nav_buttons = document.getElementsByClassName("step-trigger");
  prevoius_section.style.display = "block";

  e.target.parentElement.parentElement.parentElement.style.display = "none";

  if (prevoius_section.firstElementChild.textContent === "Review") {
    const submit_btn = document.getElementById("submit-button");
    submit_btn.style.display = "none";
  }

  for (let btn of nav_buttons) {
    if (
      btn.children[1].textContent ==
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .textContent
    ) {
      if (window.screen.width < 500) {
        btn.previousElementSibling.previousElementSibling.style.display =
          "block";
        btn.style.display = "none";
      }
      if (btn.children[1].textContent !== "Start") {
        btn.previousElementSibling.style.color = "#888";
        btn.getElementsByTagName("svg")[0].setAttribute("fill", "#888");
        btn.children[1].style.color = "#888";
      }
    }
  }
}

function handleStep() {
  const button = this;
  const sect = document.getElementsByClassName("section");
  const nav_buttons = document.getElementsByClassName("step-trigger");

  if (button.getElementsByTagName("svg")[0].getAttribute("fill") === "#888") {
    return;
  }

  for (let element of sect) {
    if (button.children[1].textContent === "Start") {
      sect[1].style.display = "block";
    }

    if (
      element.firstElementChild.textContent === button.children[1].textContent
    ) {
      element.style.display = "block";
    } else if (element.firstElementChild.tagName === "BUTTON") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }

  let flag = true;
  for (let btn of nav_buttons) {
    if (flag) {
      if (btn.children[1].textContent !== "Start") {
        btn.previousElementSibling.style.color = "#7CCD44";
        btn.getElementsByTagName("svg")[0].setAttribute("fill", "#7CCD44");
        btn.children[1].style.color = "#7CCD44";
      }
      if (btn === button) {
        flag = false;
      }
    } else {
      btn.previousElementSibling.style.color = "#888";
      btn.getElementsByTagName("svg")[0].setAttribute("fill", "#888");
      btn.children[1].style.color = "#888";
    }
  }
}

const review_btn = document.getElementsByClassName("review-btn");
review_btn[0].addEventListener("click", updateReviewSection);
// Function to update the review section with input values

function updateReviewSection(event) {
  try {
    checkPaymentSection();
    checkDisclosure();
  } catch (error) {
    diamondJozu(error.message);
    return;
  }

  try {
    const eligibilityValue = document.querySelector(
      "input[name=eligibility]:checked"
    ).parentElement.innerText;
    console.log(eligibilityValue);
    document.getElementById("reviewEligibility").innerText =
      eligibilityValue.replace(/\s+/g, "");

    const lastName = document.getElementById("lastName").value;
    document.getElementById("reviewLastName").textContent = lastName;

    const secondLastName = document.getElementById("secondLastName").value;
    document.getElementById("reviewSecondLastName").textContent =
      secondLastName;

    const middleName = document.getElementById("middleName").value;
    document.getElementById("reviewMiddleName").textContent = middleName;

    const reviewsecondLastName = document.getElementById(
      "dependant-secondLastName"
    ).value;
    document.getElementById("reviewDependantSecondLastName").textContent =
      reviewsecondLastName;

    const reviewmiddleName = document.getElementById(
      "dependant-middleName"
    ).value;
    document.getElementById("reviewDependantMiddleName").textContent =
      reviewmiddleName;

    const address = document.getElementById("address").value;
    document.getElementById("reviewAddress").textContent = address;

    const aptFloorOther = document.getElementById("aptFloorOther").value;

    document.getElementById("reviewAptFloorOther").textContent = aptFloorOther;

    const city = document.getElementById("city").value;

    document.getElementById("reviewCity").textContent = city;

    const zipCode = document.getElementById("zipCode").value;

    document.getElementById("reviewZipCode").textContent = zipCode;

    const state = document.getElementById("state").value;

    document.getElementById("reviewState").textContent = state;

    const checkBqp = document.querySelector("input[name=bqp]:checked");

    if (checkBqp.value === "no") {
      document.getElementById("dependant-heading").style.display = "none";
      document.getElementById("dependant-section").style.display = "none";
    } else {
      document.getElementById("dependant-heading").style.display = "block";
      document.getElementById("dependant-section").style.display = "grid";
    }
  } catch (error) {
    console.log(error.message);
  }

  // If no errors occur, call the next function
  handleNextButtonClick(event);
  const popup = document.getElementById("processing-popup");
  popup.style.display = "flex";

  // Optionally, you can submit the form here if needed

  // Close the popup after a certain time (e.g., 3 seconds)
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

export { handleNextButtonClick };
