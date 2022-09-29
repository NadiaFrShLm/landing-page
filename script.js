"use strict";

const email = document.querySelector("#email");
const emailForm = document.querySelector(".email-form");
const emailAlert = document.querySelector(".error");
const errorMessage = document.querySelector(".error-message");

function checkEmail() {
  // regex symboles @ symboles . symboles
  var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!filter.test(email.value)) {
    emailForm.classList.add("error-form");
    emailAlert.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    errorMessage.style.transform = "translateY(3rem)";
    email.value = "";

    setInterval(() => {
      emailForm.classList.remove("error-form");
      emailAlert.classList.add("hidden");
      errorMessage.classList.add("hidden");
    }, "2000");

    email.focus;
    return false;
  }
  email.value = "";
}
