const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for(const key of Object.keys(dictionary))
{
    console.log(`Words that begin with ${key}:`)
    for(const word of dictionary[key]){
        console.log(word);
    }
}