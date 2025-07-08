const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = "Daniel" // or 'Ted';

if(reservations[name]){ //We use bracket and not . because we want the value of the key and not the key.
    if(reservations[name].claimed){
        console.log("Hmm, someone already claimed this reservation");
    }else {
    console.log(`Welcome, ${name}`);
  }
} else {
  console.log("You have no reservation");
 
}

