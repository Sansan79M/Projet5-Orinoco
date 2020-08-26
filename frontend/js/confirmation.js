//Récupération des infos du panier
/*const teddie_id = JSON.parse(localStorage.getItem("product_value_teddies"));

ajaxGet('http://localhost:3000/api/teddies/' + orderId).then(function (result) {
    displayOrder(result);
}).catch(function (error) {
    console.log(error);
    alert("Une erreur est survenue, veuillez réessayer dans un moment");
});*/

function displayOrder(order) {

    //Main
    const $confirm = document.querySelector('#confirm');

    //div container
    const $container = document.createElement('div');
    $container.className = "container";
    $confirm.appendChild($container);

    //Image logo panier
    const $imgLogo = document.createElement('img');
    $imgLogo.className = "img-fluid";
    $imgLogo.setAttribute ("src", "img/logo-orinoco-panier.png");
    $imgLogo.setAttribute ("alt", "Logo d'Orinoco avec un caddie");
    $container.appendChild($imgLogo);
    
    //Section
    const $section = document.createElement('section');
    $section.setAttribute ("id", "text-confirm");
    $container.appendChild($section);

    //titre H1 
    const $title = document.createElement('h1');
    $title.innerText = "Nous vous remercions pour votre achat, votre commande a été validée avec succès.\n\n";
    $section.appendChild($title);

    //paragraphe info
    const $info = document.createElement('p');
    $info.innerText = "Vous allez recevoir dans quelques minutes un mail de confirmation.\n\n";
    $section.appendChild($info);


    //Réf - prix commande--------------------------
    const $orderElement1 = document.createElement('p');
    $orderElement1.innerText = "Veuillez trouver votre numéro de commande : ";
    $section.appendChild($orderElement1);

    //Récupération de la référence commande
    const orderId = localStorage.getItem("orderId");

    //Réf commande
    const $orderNumber = document.createElement('span');
    $orderNumber.className = "font-weight-bold";
    $orderNumber.innerText = orderId;
    $orderElement1.appendChild($orderNumber);


    //Récupération du montant du panier
    const basketAmount = localStorage.getItem("basket-amount");

    //Annonce le montant 
    const $orderElement2 = document.createElement('span');
    $orderElement2.innerText = ", d'un montant de ";
    $orderElement1.appendChild($orderElement2);

    //Montant de la commande
    const $orderPrice = document.createElement('span');
    $orderPrice.className = "font-weight-bold";
    $orderPrice.setAttribute ("id", "order-price");
    $orderPrice.innerText = basketAmount + ".";
    $orderElement1.appendChild($orderPrice);

    //Devise du prix
    //const $orderElement3 = document.createElement('span');
    //$orderElement3.innerText = " euros.";
    //$orderElement1.appendChild($orderElement3);
    
    //Fin Réf - prix commande--------------------------


    //Retrouver la commande----------------------------
    const $orderInformation = document.createElement('p');
    $orderInformation.innerText = "Vous trouverez tous les élements de votre commande dans votre ";
    $section.appendChild($orderInformation);

    const $orderInformationLink = document.createElement('a');
    $orderInformationLink.setAttribute ("aria-label", "Lien vers la page du compte client");
    $orderInformationLink.setAttribute ("href", "#");
    $orderInformationLink.innerText = "compte client.\n\n"
    $orderInformation.appendChild($orderInformationLink);
    
    //Fin Retrouver la commande----------------------------


    //Retour à l'accueil---------------------------------
    const $returnHomePage = document.createElement('p');
    $returnHomePage.innerText = "Pour revenir à la page d'"
    $section.appendChild($returnHomePage);

    const $backLink = document.createElement('a');
    $backLink.setAttribute ("aria-label", "Lien vers la page d'accueil");
    $backLink.setAttribute ("href", "index.html");
    $backLink.innerText = "accueil" + "."
    $returnHomePage.appendChild($backLink);

    //Fin de la commande, suppression des informations
    $backLink.addEventListener('click', localStorage.clear());
    
    //Fin Retour à l'accueil---------------------------------


}