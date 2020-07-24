

    //Main
    const $confirm = document.querySelector('#confirm');

    //div container
    const $container = document.createElement('div');
    $container.className = "container";
    $confirm.appendChild($container);

    //Image logo panier
    const $imgLogo = document.createElement('img');
    $imgLogo.className = "imgLogo-fluid";
    $imgLogo.setAttribute ("src", "img/logo-orinoco-panier.png");
    $imgLogo.setAttribute ("alt", "Logo d'Orinoco avec un caddie");
    $container.appendChild($imgLogo);
    
    //Section
    const $section = document.createElement('section');
    $section.setAttribute ("id", "text-confirm");
    $container.appendChild($section);

    //titre H1 
    const $title = document.createElement('h1');
    $title.innerText = "Nous vous remercions pour votre achat, votre commande à été validée avec succès.\n\n";
    $section.appendChild($title);

    //paragraphe info
    const $info = document.createElement('p');
    $info.innerText = "Vous allez recevoir dans quelques minutes un mail de confirmation.\n\n";
    $section.appendChild($info);

    //Réf - prix commande--------------------------
    const $orderElement = document.createElement('p');
    $section.appendChild($orderElement);

    //Réf commande
    const $orderNumber = document.createElement('span');
    $orderNumber.className = "font-weight-bold";
    $orderNumber.setAttribute ("id", "order-number");
    $orderElement.appendChild($orderNumber);

    //Prix commande
    const $orderPrice = document.createElement('span');
    $orderPrice.className = "font-weight-bold";
    $orderPrice.setAttribute ("id", "order-number");
    $orderElement.innerText = "Veuillez trouver votre de numéro de commande : " + ($orderNumber.innerText = " ? ") + ", d'un montant de " + ($orderPrice.innerText = " ? ") + " euros.\n Vous trouverez tous les élements de votre commande dans votre compte client.";
    $orderElement.appendChild($orderPrice);

    //Fin Réf - prix commande--------------------------


    //Retour à l'accueil
    const $returnHomePage = document.createElement('p');
    $returnHomePage.innerText = "Pour revenir à la page d'"
    $section.appendChild($returnHomePage);

    const $backLink = document.createElement('a');
    $backLink.setAttribute ("aria-label", "Lien vers la page d'accueil");
    $backLink.setAttribute ("href", "index.html");
    $backLink.innerText = "accueil."
    $returnHomePage.appendChild($backLink);

