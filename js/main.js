const template = document.getElementById("cardTemplate");
const addButton = document.getElementById("add");
const record = document.getElementById("records");

addButton.onclick = function () {
    console.dir(template);
    template.content.getElementById("firstName").innerHTML = "Berk";
    template.content.getElementById("lastName").innerHTML = "Özerdoğan";
    template.content.getElementById("age").innerHTML = "32";
    record.innerHTML += template.innerHTML;
}