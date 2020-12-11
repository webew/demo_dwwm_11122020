// function fonctionSansReturn() {
//     console.log("Ma fonction est de créer un fonction");
// }

// fonctionSansReturn();

// function fonctionAvecReturn() {
//     return "Je suis une fonction avec return";
// }

// let message = fonctionAvecReturn();

// console.log(message);

//////////////////////////////////////////////

fonctionSansReturnAvecParametre(
    "Affiche ce texte que je te passe en paramètre"
);

let nouveauMessage = fonctionAvecReturnAvecParametre("une valeur");

console.log(nouveauMessage);

// les fonctions

function fonctionSansReturnAvecParametre(parametre) {
    console.log(parametre);
}
function fonctionAvecReturnAvecParametre(parametre) {
    return "La valeur du paramètre est : " + parametre;
}
