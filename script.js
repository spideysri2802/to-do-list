function addItem() {
    var checklist = document.getElementById("checklist");
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var item = prompt("Add item:");

    console.log("user typed: " + item)

    checkbox.type = "checkbox";
    checkbox.name = "todoitem";
    checkbox.value = "value";
    checkbox.id = "checkitem";
    checkbox.addEventListener('click', alert);

    label.htmlFor = "checkitem";
    label.id = "checkitemLabel";
    label.appendChild(document.createTextNode(item)); 

    checklist.appendChild(checkbox);
    checklist.appendChild(label);
    checklist.innerHTML += "<br>";

}

function checked() {
    var checkitem = document.getElementById("checkitem");
    if (checkitem[0].checked){
    alert("good job!")
    }
}



