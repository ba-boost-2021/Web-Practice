const template = document.getElementById("cardTemplate");
const addButton = document.getElementById("add");
const record = document.getElementsByClassName("records")[0];
const txtFirstName = document.getElementById("txtFirstName");
const txtLastName = document.getElementById("txtLastName");
const txtAge = document.getElementById("txtAge");
const txtDescriptions = document.getElementById("txtDescription");
function clear() {
    txtFirstName.value = "";
    txtLastName.value = "";
    txtAge.value = "";
    txtDescriptions.value = "";
}

addButton.onclick = function () {

    //console.dir(template);
    template.content.getElementById("firstName").innerHTML = txtFirstName.value;
    template.content.getElementById("lastName").innerHTML = txtLastName.value;
    template.content.getElementById("age").innerHTML = txtAge.value;
    template.content.getElementById("description").innerHTML = txtDescriptions.value;
    record.innerHTML += template.innerHTML;
    clear();
}