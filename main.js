///Variables
const enterHere = document.getElementById("enterHere")
const addToList = document.getElementById("addToList")
const listItem = document.getElementById("list")
const clearL = document.getElementById ("clearL")
const clearC = document.getElementById("clearC")
const toDos = document.getElementById("toDos")

///Functions
//add function adds list items to ul 
function add(){
  listItem.innerHTML += "<li>"+enterHere.value+"</li>"
  enterHere.value = ""
  updateToDo()
}
//function clear list will clear all task on list
function clearlist(){
  listItem.innerHTML = ""
  updateToDo()
}
//strike function will use .done in css to strike through selected list items
function strike(e){
  //Write Conditional using e.target.tagName to toggle a class when a list item is clicked.
  //Add a text decoration on the class "done" to get a strike through effect
  
  if (e.target.id !== "list"){
    e.target.classList.toggle("done")
  }
  

}

//write a function that will remove all list item's that have the class "done" using a for loop and List.removeChild(). You will need a conditional in the for loop that verifies if the current list item has the class.
//use a for loop to tager done items to remove from list
function removeDone(){
  for (let i = 0; i < listItem.children.length; i++) {
  if (listItem.children[i] .className === "done"){
    listItem.removeChild(listItem.children[i])
    i--
  }

  }
  updateToDo()
}
function updateToDo(){
  toDos.innerHTML = listItem.childElementCount

}



///EventListners
addToList.addEventListener("click", add)
listItem.addEventListener("click", strike)
clearL.addEventListener("click", clearlist)
clearC.addEventListener("click", removeDone)






///
///
///