const trie = new AutoCompleteTrie()


const addBtn = document.getElementById("addBtn")
const addDiv = document.getElementsByClassName("addDiv")[0]
const find = document.getElementById("find").value
const counter = document.getElementById("increment")
let count = 0

addBtn.addEventListener("click", add)
const findInput = document.getElementById("find");
const suggestionsList = document.getElementById("suggestions");


function add() {
    const current = document.getElementById('addInput');
    const addInput = current.value;
    trie.addWord(addInput)
    if (addInput !== '') {
        count++
        counter.innerHTML = `${count}`
        const validation = document.getElementById("validation")
        validation.style.padding = "10px"
        validation.style.width = "95%"
        validation.innerHTML = `✅ Added '${addInput}' to dictionary`
        addDiv.appendChild(validation)
        current.value = "";
    } else {
        const validation = document.getElementById("validation")
        validation.style.padding = "10px"
        validation.style.width = "95%"
        validation.innerHTML = `❌ Cannot add empty word`
        validation.style.backgroundColor = "#fed7d7"
        addDiv.appendChild(validation)
        current.value = "";
    }
}

document.getElementById("find").oninput = function () {
  const prefix = this.value;
  const suggestionsDiv = document.getElementById("suggestions");

  if (prefix === "") {
    suggestionsDiv.innerHTML = "";
    return;
  }

  const suggestions = trie.predictWords(prefix);
  suggestionsDiv.innerHTML = "";

  suggestions.forEach(word => {
    const p = document.createElement("p");
    p.textContent = word;
    suggestionsDiv.appendChild(p);
  });
};




