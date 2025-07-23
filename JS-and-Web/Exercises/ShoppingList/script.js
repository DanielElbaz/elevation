document.getElementById("add").addEventListener("click", () => {
  const input = document.getElementById("myInput");
  const value = input.value.trim();

  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;

    const itemList = document.getElementById("list");
    itemList.appendChild(li);

    input.value = ""; 
  }
});
