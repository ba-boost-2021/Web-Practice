const template = document.getElementById("cardTemplate");
const addButton = document.getElementById("add");
const record = document.getElementsByClassName("records")[0];
const txtFirstName = document.getElementById("txtFirstName");
const txtLastName = document.getElementById("txtLastName");
const txtAge = document.getElementById("txtAge");
const txtDescriptions = document.getElementById("txtDescription");
const cmbGender = document.getElementById("cmbGender");
const genderValidation = document.getElementById("genderValidation");
const removeButton = document.getElementById("remove");
var records = new Array();
var selectedItem = null;
document.addEventListener("click", () => {
    record.querySelectorAll(".card.selected").forEach(x => {
        x.classList.remove("selected")
    })
    removeButton.style.display = "none";
}, false)
function clear() {
    txtFirstName.value = "";
    txtLastName.value = "";
    txtAge.value = "";
    txtDescriptions.value = "";
    genderValidation.style.display = "none";
    cmbGender.value = -1;
}
function remove() {
    window.event.stopPropagation();
    if (selectedItem === null) {
        return;
    }
    records = records.filter(x => x.id !== selectedItem);
    load();
}
function select(element) {
    window.event.stopPropagation();
    record.querySelectorAll(".card.selected").forEach(x => {
        x.classList.remove("selected")
    })
    element.classList.add("selected");
    selectedItem = element.id;
    removeButton.style.display = "block";
}
addButton.onclick = function () {
    if (cmbGender.value == -1) {
        genderValidation.style.display = "block";
        return;
    }
    records.push({
        id: new Date().getTime().toString(),
        firstName: txtFirstName.value,
        lastName: txtLastName.value,
        age: txtAge.value,
        description: txtDescriptions.value,
        imgSrc: cmbGender.value == 0 ? "img/male.png" : "img/female.png"
    })
    load();
    clear();
}
function load() {
    record.innerHTML = "";
    records.forEach(item => {
        template.content.getElementById("firstName").innerHTML = item.firstName;
        template.content.getElementById("lastName").innerHTML = item.lastName;
        template.content.getElementById("age").innerHTML = item.age;
        template.content.getElementById("description").innerHTML = item.description;
        template.content.getElementById("genderImg").src = item.imgSrc;
        template.content.querySelectorAll(".default")[0].id = item.id;
        record.innerHTML += template.innerHTML;
    });
    removeButton.style.display = "none";
}