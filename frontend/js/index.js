//Récupération du backend
const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/teddies');

xhr.send();

xhr.addEventListener('load', function() {
    console.log(JSON.parse(xhr.responseText));
    const teddies = JSON.parse(xhr.responseText);

    //Stocker en local les éléments du backend
    const objectTeddies = JSON.stringify(teddies);
    localStorage.setItem("obj", objectTeddies);
    console.log(localStorage);
   

    //Récupération des éléments parents de index.html
    const $productList = document.querySelector('#product-list');//Liste des produits à gauche
    const $carouselInner = document.querySelector('.carousel-inner');//Carousel d'image à droite
    const $carouselIndicators = document.querySelector('.carousel-indicators'); //Carousel indicator(tirets)
    const $productCard = document.querySelector('#product-card'); //Carte produit 
    
    //Boucle permettant d'insérer tous les éléments du backend
    for (let i = 0; i < teddies.length; i++) {
        console.log(teddies[i]);

        //Liste des produits à gauche 
        const $list = document.createElement("a");
        $list.setAttribute ("aria-label", "Lien vers la page produit");
        $list.setAttribute ("href", "produit.html");
        $list.className = "list-group-item";
        $list.innerText = teddies[i].name;
        $productList.appendChild($list);

        
        //Carousel================================================================

        //Carousel à droite 
        const $carouselItem = document.createElement('div');
        $carouselItem.className = "carousel-item";
        if (i === 0) {
            $carouselItem.className += " active";
        } 
        $carouselInner.appendChild($carouselItem);

        //Images du carousel
        const $imgCarousel = document.createElement("img");
        $imgCarousel.className = "d-block img-fluid";
        $imgCarousel.setAttribute ("src", teddies[i].imageUrl);
        $imgCarousel.setAttribute ("alt", "Ourson");
        $carouselItem.appendChild($imgCarousel);
        $carouselInner.appendChild($carouselItem);

        //Carousel indicator
        const $carouselSlide = document.createElement('li');
        $carouselSlide.setAttribute ("data-target", "#carouselExampleIndicators");
        $carouselSlide.setAttribute ("data-slide-to", i); 
        if (i === 0) {
            $carouselSlide.className = "active";
        } 
        $carouselIndicators.appendChild($carouselSlide);
      
        //Fin Carousel================================================================



        //Cartes articles======================================================

        //Images des articles avec liens
        const $colLg4 = document.createElement('div');
        $colLg4.className = "col-lg-4 col-md-6 mb-4";
        const $cardH100 = document.createElement('div');
        $cardH100.className = "card h-100"
        const $imgLink = document.createElement("a");
        $imgLink.setAttribute ("aria-label", "Lien vers la page produit");
        $imgLink.setAttribute ("href", "produit.html");
        const $imgCard = document.createElement("img");
        $imgCard.className = "card-img-top";
        $imgCard.setAttribute ("src", teddies[i].imageUrl);
        $imgCard.setAttribute ("alt", "Ourson");

        $productCard.appendChild($colLg4);
        $colLg4.appendChild($cardH100);
        $cardH100.appendChild($imgLink);
        $imgLink.appendChild($imgCard);

        //Nom des articles
        const $cardBody = document.createElement("div");
        $cardBody.className = "card-body";
        $cardH100.appendChild($cardBody);

        const $cardTitle = document.createElement("h2");
        $cardTitle.className = "card-title";
        $cardBody.appendChild($cardTitle);

        const $cardName = document.createElement("a");
        $cardName.setAttribute ("aria-label", "Lien vers la page produit");
        $cardName.setAttribute ("href", "produit.html");
        $cardName.innerText = teddies[i].name;
        $cardTitle.appendChild($cardName);

        //Prix des articles
        const $price = document.createElement("h3");
        $price.innerText = teddies[i].price + " euros";
        $cardBody.appendChild($price);

        //Références des articles
        const $cardFooter = document.createElement("div");
        $cardFooter.className = "card-footer";
        const $objectId = document.createElement("small");
        $objectId.className = "text-muted";
        $objectId.innerText = "Réf. " + teddies[i]._id;
        $cardH100.appendChild($cardFooter);
        $cardFooter.appendChild($objectId);

        //FIN Cartes articles=============================================
    }
    

});


