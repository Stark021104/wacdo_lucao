// Fonction pour générer un numéro de commande unique
function genererNumeroCommande() {
    // Utilise l'heure actuelle pour créer un nombre unique
    const timestamp = Date.now();
    // Ajoute un nombre aléatoire pour plus de variabilité
    const randomPart = Math.floor(Math.random() * 1000);
    return `CMD-${timestamp}-${randomPart}`;
}

function genererTicket() {
    // Récupération des sélections
    const burger = document.getElementById("burger").value;
    /* const sandwich = document.getElementById("sandwich").value; annoncé mais pas pris en compte*/
    /* const wrap = document.getElementById("wrap").value; annoncé mais pas pris en compte*/
    const frites = document.getElementById("frites").value;
    const boisson = document.getElementById("boisson").value;
    /* const dessert = document.getElementById("dessert").value; annoncé mais pas pris en compte*/

    // Générer un numéro de commande unique
    const numeroCommande = genererNumeroCommande();

    // Extraction des prix
    const prixBurger = parseInt(burger.split('-')[1].replace('€', '').trim());
    /* const prixSandwich = parseInt(sandwich.split('-')[1].replace('€', '').trim()); annoncé mais pas pris en compte*/
    /* const prixWrap = parseInt(wrap.split('-')[1].replace('€', '').trim()); annoncé mais pas pris en compte*/
    const prixFrites = parseInt(frites.split('-')[1].replace('€', '').trim());
    const prixBoisson = parseInt(boisson.split('-')[1].replace('€', '').trim());
    /* const prixDessert = parseInt(dessert.split('-')[1].replace('€', '').trim()); annoncé mais pas pris en compte*/


    // Calcul du prix total
    const prixTotal = prixBurger + prixFrites + prixBoisson; /* sans ajouter wrap, sandwich et dessert*/

    // Création du ticket
    const ticketContent = `
        <h3>Votre ticket de Commande</h3>
        <p><strong>Numéro de commande:</strong> ${numeroCommande}</p>
        <p><strong>Burger:</strong> ${burger}</p>
        <p><strong>Frites:</strong> ${frites}</p>
        <p><strong>Boisson:</strong> ${boisson}</p>
        <p><strong>Total:</strong> ${prixTotal}€</p>
        <p>Merci pour votre commande !</p>
    `;

    // Affichage du ticket
    document.getElementById("ticket").innerHTML = ticketContent;
}