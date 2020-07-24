const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/teddies');

xhr.send();

xhr.addEventListener('load', function () {
    console.log(JSON.parse(xhr.responseText));
    const teddies = JSON.parse(xhr.responseText);

    //Main : catalog
    const $catalog = document.querySelector('#catalog');

    //Div container
    const $container = document.createElement("div");
    $container.className = "container";
    $catalog.appendChild($container);

    //Div row
    const $row = document.createElement("div");
    $row.className = "row";
    $container.appendChild($row);

    //Div col-lg-3 (partie gauche)--------------
    const $colLg3 = document.createElement("div");
    $colLg3.className = "col-lg-3";
    $row.appendChild($colLg3);

    //h1 titre à gauche 
    const $h1 = document.createElement("h1");
    $h1.className = "my-4";
    $h1.innerText = "Orinoco vous présente ses magnifiques peluches faites à la main !";
    $colLg3.appendChild($h1);

    //Div product-list
    const $productList = document.createElement("div");
    $productList.setAttribute("id", "product-list")
    $productList.className = "list-group";
    $colLg3.appendChild($productList);
    //*En suite voir dans la boucle for : Liste des produits à gauche dans la boucle for
    //Fin div col-lg-3 (partie gauche)-----------------------------------------

    //Div col-lg-9 (partie droite)---------------------------
    const $colLg9 = document.createElement("div");
    $colLg9.className = "col-lg-9";
    $row.appendChild($colLg9);

    //Div tirets de défilements
    const $carouselExampleIndicators = document.createElement("div");
    $carouselExampleIndicators.setAttribute("id", "carouselExampleIndicators");
    $carouselExampleIndicators.setAttribute("data-ride", "carousel");
    $carouselExampleIndicators.className = "carousel slide my-4";
    $colLg9.appendChild($carouselExampleIndicators);
    //*Ensuite voir dans la boucle for : ol Carousel indicator  / li Carousel indicator 1 / li Carousel indicator suivants

    //Div Carousel à droite 
    const $carouselInner = document.createElement('div');
    $carouselInner.setAttribute("role", "listbox");
    $carouselExampleIndicators.appendChild($carouselInner);
    //*Ensuite voir dans la boucle for : //img images du carousel

    //flèche précédente carousel*****
    const $previousArrow = document.createElement("a");
    $previousArrow.setAttribute("aria-label", "Flèche du carrousel pour aller à la photo précédente");
    $previousArrow.setAttribute("href", "#carouselExampleIndicators");
    $previousArrow.setAttribute("role", "button");
    $previousArrow.setAttribute("data-slide", "prev");
    $previousArrow.className = "carousel-control-prev";
    $carouselExampleIndicators.appendChild($previousArrow);

    const $prevIcon = document.createElement("span");
    $prevIcon.className = "carousel-control-prev-icon";
    $prevIcon.setAttribute("aria-hidden", "true");
    $previousArrow.appendChild($prevIcon);

    const $previous = document.createElement("span");
    $previous.className = "sr-only";
    $previous.innerText = "Previous";
    $previousArrow.appendChild($previous);

    //flèche suivante carousel*******
    const $nextArrow = document.createElement("a");
    $nextArrow.setAttribute("aria-label", "Flèche du carrousel pour aller à la photo suivante");
    $nextArrow.setAttribute("href", "#carouselExampleIndicators");
    $nextArrow.setAttribute("role", "button");
    $nextArrow.setAttribute("data-slide", "next");
    $nextArrow.className = "carousel-control-next";
    $carouselExampleIndicators.appendChild($nextArrow);

    const $nextIcon = document.createElement("span");
    $nextIcon.className = "carousel-control-next-icon";
    $nextIcon.setAttribute("aria-hidden", "true");
    $nextArrow.appendChild($nextIcon);

    const $next = document.createElement("span");
    $next.className = "sr-only";
    $next.innerText = "Next";
    $nextArrow.appendChild($next);

    // fin Div col-lg-9 (partie droite)---------------------------

  

    //BOUCLE FOR
    for (let i = 0; i < teddies.length; i++) {
        console.log(teddies[i]);

        //Liste des produits à gauche 
        const $list = document.createElement("a");
        $list.setAttribute("aria-label", "Lien vers la page produit");
        $list.setAttribute("href", "produit.html");
        $list.className = "list-group-item";
        $list.innerText = teddies[i].name;
        $productList.appendChild($list);

        //div carousel-item
        const $carouselItem = document.createElement('div');
        $carouselItem.className = "carousel-item";
        if (i === 0) {
            $carouselItem.className += " active";
        }
        $carouselInner.appendChild($carouselItem);

        //img images du carousel
        const $imgCarousel = document.createElement("img");
        $imgCarousel.className = "d-block img-fluid";
        $imgCarousel.setAttribute("src", teddies[i].imageUrl);
        $imgCarousel.setAttribute("alt", "Ourson");
        $carouselItem.appendChild($imgCarousel);

        //ol Carousel indicator 
        const $carouselIndicators = document.createElement('ol');
        $carouselIndicators.className = "carousel-indicators";
        $carouselExampleIndicators.appendChild($carouselIndicators);

        //li Carousel indicator 1
        const $carouselSlide = document.createElement('li');
        $carouselSlide.setAttribute("data-target", "#carouselExampleIndicators");
        $carouselSlide.setAttribute("data-slide-to", "0");
        $carouselSlide.className;
        if (i === 0) {
            $carouselSlide.className += "active";
        }
        $carouselIndicators.appendChild($carouselSlide);

        //li Carousel indicator suivants
        $('<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>').insertAfter($carouselSlide);
        $('<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>').insertAfter($carouselSlide);
        $('<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>').insertAfter($carouselSlide);
        $('<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>').insertAfter($carouselSlide);

        /*while ($carouselSlide <= teddies.length) {
            $carouselSlide ++;
        }
        $carouselSlide.innerText = teddies[i];   */


        //Cartes articles======================================================
        const $productCard = document.createElement('div');
        $productCard.setAttribute("id", "product-card");
        $productCard.className = "row";
        $colLg9.appendChild($productCard);

        //Images des articles avec liens-------------------
        const $colLg4 = document.createElement('div');
        $colLg4.className = "col-lg-4 col-md-6 mb-4";
        $productCard.appendChild($colLg4);

        const $cardH100 = document.createElement('div');
        $cardH100.className = "card h-100";
        $colLg4.appendChild($cardH100);

        const $imgLink = document.createElement("a");
        $imgLink.setAttribute("aria-label", "Lien vers la page produit");
        $imgLink.setAttribute("href", "produit.html");
        $cardH100.appendChild($imgLink);

        const $imgCard = document.createElement("img");
        $imgCard.className = "card-img-top";
        $imgCard.setAttribute("src", teddies[i].imageUrl);
        $imgCard.setAttribute("alt", "Ourson");
        $imgLink.appendChild($imgCard);

        //Nom des articles----------------------------------------
        const $cardBody = document.createElement("div");
        $cardBody.className = "card-body";
        $cardH100.appendChild($cardBody); 

        const $cardTitle = document.createElement("h2");
        $cardTitle.className = "card-title";
        $cardBody.appendChild($cardTitle);

        const $cardName = document.createElement("a");
        $cardName.setAttribute("aria-label", "Lien vers la page produit");
        $cardName.setAttribute("href", "produit.html");
        $cardName.innerText = teddies[i].name; 
        $cardTitle.appendChild($cardName);

        //Prix des articles--------------------------------
        const $price = document.createElement("h3");
        $price.innerText = teddies[i].price + " euros";
        $cardBody.appendChild($price);

        //Références des articles------------------------------
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


