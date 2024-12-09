const addItem=document.getElementById("add");
const itemAdded=document.getElementById("newItem");
const clearList=document.getElementById("clear");
const newOL=document.getElementById("itemsC")
const markPurchase=document.getElementById("purchased")
//const newliElement=document.createElement("li")
let newArr=[]



addItem.addEventListener("click",()=>{
    const item=itemAdded.value;
    if (item !==" "){
        newArr.push(item);
        itemAdded.value=" ";
        newList();
    }});
        

function newList(){
    newArr.forEach(item => {

        const newliElement=document.createElement("li")
        newliElement.textContent=item;
        newOL.appendChild(newliElement);
        newliElement.addEventListener("click",()=>{
        newliElement.classList.toggle("Bought");
        });
    });
}


clearList.addEventListener("click",()=>{
    newOL.innerHTML='';

})

function saveItems(){
    localStorage.setItem("items")
}