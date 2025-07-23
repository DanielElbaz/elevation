
const submit = document.getElementById("submit")
submit.addEventListener("click", validate)
const form = document.getElementById("form")

function validate(event) {
    event.preventDefault();
    const fname = document.getElementById("name");
    const salary = document.getElementById("salary");
    const bdate = document.getElementById("bdate");
    const tel = document.getElementById("tel");


    if (fname.value.length <= 2) {
        const err = document.createElement("p")
        err.innerHTML = "missing name"
        err.className = "error-message";
        form.appendChild(err)
    }

    if (salary.value < 10000 || salary.value > 16000) {
        const err = document.createElement("p")
        err.innerHTML = "missing salary"
        err.className = "error-message";
        form.appendChild(err)
    }

    if (bdate.value === '') {
        const err = document.createElement("p")
        err.innerHTML = "missing birthday"
        err.className = "error-message";
        form.appendChild(err)
    }

    if (tel.value.length !== 10) {
        const err = document.createElement("p")
        err.innerHTML = "missing phone"
        err.className = "error-message";
        form.appendChild(err)
    }
}

