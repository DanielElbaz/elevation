const submit = document.getElementById("submit");
submit.addEventListener("click", validate);
const form = document.getElementById("form");

function validate(event) {
    event.preventDefault();
    
    
    clearErrors();

    
    const name = document.getElementById("name").value.trim();
    const salary = parseInt(document.getElementById("salary").value);
    const birthday = document.getElementById("bdate").value;
    const phone = document.getElementById("tel").value.trim();

    
    if (!isNameValid(name)) showError("Name is missing");
    if (!isSalaryValid(salary)) showError("Salary must be between 10,000 and 16,000");
    if (!isBirthdayValid(birthday)) showError("Birthday is required");
    if (!isPhoneValid(phone)) showError("Phone must be exactly 10 digits");
}

function isNameValid(name) {
    return name.length > 2;
}


function isSalaryValid(salary) {
    return !isNaN(salary) && salary > 10000 && salary < 16000;
}


function isBirthdayValid(birthday) {
    return birthday !== '';
}


function isPhoneValid(phone) {
    return /^\d{10}$/.test(phone);
}


function showError(message) {
    const err = document.createElement("p");
    err.className = "error-message";
    err.textContent = message;
    form.appendChild(err);
}


function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.remove());
}
