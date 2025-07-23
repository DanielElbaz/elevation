const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const weird_name = "bob" // or 'Ted';
const fname = weird_name.toLowerCase();




const checkReservation = function () {
    const input = document.getElementById("input").value
     const message = document.getElementById("message");
    if (reservations[input]) {
        if (reservations[input].claimed) {
           message.innerHTML="Hmm, someone already claimed this reservation";
        } else {
            message.innerHTML=`Welcome, ${input}`;
        }
    } else {
        reservations[input.toLowerCase()] = { claimed: true };
        message.innerHTML=`Welcome ${input}, we created a reservation for you`;

    }
}