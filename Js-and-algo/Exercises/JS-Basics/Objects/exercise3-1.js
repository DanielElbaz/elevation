const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = "Ted" // or 'Ted';

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

