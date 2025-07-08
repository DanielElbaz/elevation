const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

const weird_name = "TeD" // or 'Ted';
const name=weird_name.toLowerCase();

if(reservations[name]){
    if(reservations[name].claimed){
        console.log("Hmm, someone already claimed this reservation");
    }else {
    console.log(`Welcome, ${name}`);
  }
} else {
  reservations[name]={claimed:true};
  console.log(`Welcome ${name}, we created a reservation for you`);
 
}

