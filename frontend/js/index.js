const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/teddies');

xhr.send();

xhr.addEventListener('load', function() {
    console.log(JSON.parse(xhr.responseText));
    const teddies = JSON.parse(xhr.responseText);

    const $productList = document.querySelector('#product-list');//Liste des produits à gauche
    const $carouselInner = document.querySelector('.carousel-inner');//Carousel d'image à droite
    const $carouselExampleIndicators = document.querySelector('#carouselExampleIndicators'); //Carousel indicator
    const $productCard = document.querySelector('#product-card'); //Carte produit 
    

    for (let i = 0; i < teddies.length; i++) {
        console.log(teddies[i]);
        
    
        //Liste des produits à gauche : <a aria-label="Lien vers la page produit " href="pages/produit.html" class="list-group-item"></a>
        const $a = document.createElement("a");
        $a.setAttribute ("aria-label", "Lien vers la page produit");
        $a.setAttribute ("href", "produit.html");
        $a.className = "list-group-item";
        $a.innerText = teddies[i].name;
        $productList.appendChild($a);

        //Carousel à droite : <img class="d-block img-fluid" src="" alt="Ourson ">
        const $carouselItem = document.createElement('div');
        $carouselItem.className = "carousel-item";
        if (i === 0) {
            $carouselItem.className += " active";
        }   
        const $imgCarousel = document.createElement("img");
        $imgCarousel.className = "d-block img-fluid";
        $imgCarousel.setAttribute ("src", teddies[i].imageUrl);
        $imgCarousel.setAttribute ("alt", "Ourson");
        $carouselItem.appendChild($imgCarousel);
        $carouselInner.appendChild($carouselItem);

        //Carousel indicator 1
        const $carouselIndicators = document.createElement('ol');
        $carouselIndicators.className = "carousel-indicators";
        const $carouselSlide = document.createElement('li');
        $carouselSlide.setAttribute ("data-target", "#carouselExampleIndicators");
        $carouselSlide.setAttribute ("data-slide-to", "0"); //0 ou teddies[i].length
        $carouselSlide.className;
        if (i === 0) {
            $carouselSlide.className += "active";
        } 
        $carouselIndicators.appendChild($carouselSlide);
        $carouselExampleIndicators.appendChild($carouselIndicators);

        //Carousel indicator other
        
        $('<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>').insertAfter($carouselSlide);
        $('<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>').insertAfter($carouselSlide);
        $('<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>').insertAfter($carouselSlide);
        $('<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>').insertAfter($carouselSlide);

        /*while ($carouselSlide <= teddies.length) {
            $carouselSlide ++;
        }
        $carouselSlide.innerText = teddies[i];   */
        
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
        const $cardTitle = document.createElement("h2");
        $cardTitle.className = "card-title";
        const $cardName = document.createElement("a");
        $cardName.setAttribute ("aria-label", "Lien vers la page produit");
        $cardName.setAttribute ("href", "produit.html");
        $cardName.innerText = teddies[i].name;

        $cardH100.appendChild($cardBody);
        $cardBody.appendChild($cardTitle);
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


