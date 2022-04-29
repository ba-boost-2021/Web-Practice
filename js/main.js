const template = document.getElementById("cardTemplate");
const addButton = document.getElementById("add");
const record = document.getElementsByClassName("records")[0];
const txtFirstName = document.getElementById("txtFirstName");
const txtLastName = document.getElementById("txtLastName");
const txtAge = document.getElementById("txtAge");
const txtDescriptions = document.getElementById("txtDescription");
const cmbGender = document.getElementById("cmbGender");
const genderValidation = document.getElementById("genderValidation");
function clear() {
    txtFirstName.value = "";
    txtLastName.value = "";
    txtAge.value = "";
    txtDescriptions.value = "";
    genderValidation.style.display = "none";
    cmbGender.value = -1;
}

addButton.onclick = function () {
    if (cmbGender.value == -1) {
        genderValidation.style.display = "block";
        return;
    }
    //console.dir(template);
    template.content.getElementById("firstName").innerHTML = txtFirstName.value;
    template.content.getElementById("lastName").innerHTML = txtLastName.value;
    template.content.getElementById("age").innerHTML = txtAge.value;
    template.content.getElementById("description").innerHTML = txtDescriptions.value;
    template.content.getElementById("genderImg").src = cmbGender.value == 0 ? "img/male.png" : "img/female.png";
    record.innerHTML += template.innerHTML;
    clear();
}