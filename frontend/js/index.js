//Récupération de l'API
ajaxGet("http://localhost:3000/api/teddies").then(function (result) {
    displayTeddies(result);
}).catch(function (error) {
    console.log(error);
    alert("Une erreur est survenue, veuillez réessayer dans un moment");
});


//Affichage dynamique de la page
function displayTeddies(teddies) {

    //Récupération des éléments parents de index.html
    const $productList = document.querySelector("#product-list");//Liste des produits à gauche
    const $carouselInner = document.querySelector(".carousel-inner");//Carrousel d'image à droite
    const $carouselIndicators = document.querySelector(".carousel-indicators"); //Carrousel indicateurs (tirets)
    const $productCard = document.querySelector("#product-card"); //Carte produit 

    //Boucle permettant d'insérer tous les éléments du backend
    for (let i = 0; i < teddies.length; i++) {
        const teddie = teddies[i];
        console.log(teddies[i]);

        //Stocke en local les éléments du backend
        const saveToLocalStorage = () => {
            let data = localStorage.getItem("product_value_teddies")
            if (!data) {
                data = {
                    selectedId: "",
                    orders: []
                }
            } else {
                data = JSON.parse(data);
            }
            data.selectedId = teddie._id;
            const storageObj = JSON.stringify(data);
            localStorage.setItem("product_value_teddies", storageObj);
            console.log(saveToLocalStorage);
        }

        //Liste des produits à gauche 
        const $list = document.createElement("a");
        $list.setAttribute("aria-label", "Lien vers la page produit");
        $list.setAttribute("href", "produit.html?" + teddie.name); //Affiche le nom concerné dans l'URL
        $list.className = "list-group-item";
        $list.innerText = teddies[i].name;
        $productList.appendChild($list);

        $list.addEventListener("click", saveToLocalStorage); //Stockage local


        //Carrousel à droite =============================================================

        //Carrousel
        const $carouselItem = document.createElement("div");
        $carouselItem.className = "carousel-item";
        if (i === 0) {
            $carouselItem.className += " active";
        }
        $carouselInner.appendChild($carouselItem);

        //Images du carrousel
        const $imgCarousel = document.createElement("img");
        $imgCarousel.className = "d-block img-fluid";
        $imgCarousel.setAttribute("src", teddies[i].imageUrl);
        $imgCarousel.setAttribute("alt", "Ourson");
        $carouselItem.appendChild($imgCarousel);


        //Carrousel indicateurs
        const $carouselSlide = document.createElement("li");
        $carouselSlide.setAttribute("data-target", "#carouselExampleIndicators");
        $carouselSlide.setAttribute("data-slide-to", i);
        $carouselSlide.className = "bg-info";
        if (i === 0) {
            $carouselSlide.className = "active bg-info";
        }
        $carouselIndicators.appendChild($carouselSlide);
        //Fin Carrousel ================================================================


        //Cartes articles ==============================================================

        //Images des articles avec liens
        const $colLg4 = document.createElement("div");
        $colLg4.className = "col-lg-4 col-md-6 mb-4";
        $productCard.appendChild($colLg4);

        const $cardH100 = document.createElement("div");
        $cardH100.className = "card h-100"
        $colLg4.appendChild($cardH100);

        const $imgLink = document.createElement("a");
        $imgLink.setAttribute("aria-label", "Lien vers la page produit");
        $imgLink.setAttribute("href", "produit.html?" + teddie.name); //Affiche le nom concerné dans l'URL
        $cardH100.appendChild($imgLink);

        const $imgCard = document.createElement("img");
        $imgCard.className = "card-img-top";
        $imgCard.setAttribute("src", teddies[i].imageUrl);
        $imgCard.setAttribute("alt", "Ourson");
        $imgLink.appendChild($imgCard);

        $imgCard.addEventListener("click", saveToLocalStorage); //Stockage local


        //Nom des articles
        const $cardBody = document.createElement("div");
        $cardBody.className = "card-body";
        $cardH100.appendChild($cardBody);

        const $cardTitle = document.createElement("h2");
        $cardTitle.className = "card-title";
        $cardBody.appendChild($cardTitle);

        const $cardName = document.createElement("a");
        $cardName.setAttribute("aria-label", "Lien vers la page produit");
        $cardName.setAttribute("href", "produit.html?" + teddie.name); //Affiche le nom concerné dans l'URL
        $cardName.innerText = teddies[i].name;
        $cardTitle.appendChild($cardName);

        $cardName.addEventListener("click", saveToLocalStorage); //Stockage local

        //Prix des articles
        const $price = document.createElement("h3");
        $price.innerText = (teddies[i].price / 100) + " euros";
        $cardBody.appendChild($price);

        //Références des articles
        const $cardFooter = document.createElement("div");
        $cardFooter.className = "card-footer";
        $cardH100.appendChild($cardFooter);

        const $objectId = document.createElement("small");
        $objectId.className = "text-muted";
        $objectId.innerText = "Réf. " + teddies[i]._id;
        $cardFooter.appendChild($objectId);

        //FIN Cartes articles=============================================
    }
}