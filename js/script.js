const boutons = document.querySelectorAll(".bouton modale");

for (let i = 0; i < boutons.length; i++) {
    const boutons = boutons[i];
    boutons.addEventListener("click, openModal");

}

function openModal() {
    console.log("click");
}