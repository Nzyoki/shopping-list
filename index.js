const addItem = document.getElementById("add");
const itemAdded = document.getElementById("newItem");
const clearList = document.getElementById("clear");
const newOL = document.getElementById("itemsC")
const markPurchase = document.getElementById("purchased")
//const newliElement=document.createElement("li")
let newArr = []

//apply bought function to already existing items in list too
function attachToggleBoughtToExistingItems() {
    document.querySelectorAll("#itemsC li").forEach((li) => {
        li.addEventListener("click", () => {
            li.classList.toggle("Bought");
        });
    });
}

addItem.addEventListener("click", () => {
    const item = itemAdded.value;
    if (item !== " ") {
        const newliElement = document.createElement("li")
        newliElement.textContent = item;
        newOL.appendChild(newliElement);
        newArr.push(item);
        itemAdded.value = " ";
        newliElement.addEventListener("click", () => {
            newliElement.classList.toggle("Bought");
        });
    }
});


clearList.addEventListener("click", () => {
    newOL.innerHTML = '';

})

function saveItems() {
    localStorage.setItem("items")
}
