//demande deux nombre à l'utilisateur et en suite faire la somme
//let a = Number (prompt("entrer un nombre : "))
//let b = Number (prompt("entrer un autre nombre : "));
//console.log("la somme de " ,a,"+",b,"=", a+b  );
//const a = 55
//const a =66 
//const b = 155
//console.log ("la somme de " ,a , "+", b, "=", a + b);
//demande à l'utilisateur de saisir son nom , son prénom et son age 
//let nom = String(prompt("entrer votre nom : "));
//let prenom = String(prompt("entrer votre prénom : "));
//let age = Number(prompt("entrer votre age : "));
//console.log ("Bonjour " , nom, prenom, "vous avez", age, "ans");

//demande à l'utilisateur de saisir deux reel et en suite affiche leur division
//let a = parseFloat(prompt("entrer un reel :"))
//let b = parseFloat(prompt("entrer un autre reel :"));
//console.log ('la division de ', a, '/',b, '=', a / b)
//créer un tableau contenant 4 fruits , afficher le premier fruit du tableau ajouté un fruit à la fin du tableau et afficher le tableau supprimer le dexieme fruit affiche la taille du tableau afiche le dernier fruit
let fruits = ["pomme", "banane", "orange", "papaye"];
console.log("Premier fruit :", fruits[0]);
fruits.push("Mangue");
console.log("Tableau après ajout :", fruits);
fruits.splice(1, 1);
console.log("Tableau après suppression du deuxième fruit :", fruits);
console.log("Taille du tableau :", fruits.length);
console.log("Dernier fruit :", fruits[fruits.length - 1]);
