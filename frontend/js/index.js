const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/teddies');

xhr.send();

xhr.addEventListener('load', function() {
    console.log(JSON.parse(xhr.responseText));
    const teddies = JSON.parse(xhr.responseText);
    const productList = document.getElementById('product-list');//Liste des produits à gauche
    const carouselItem = document.getElementsByClassName('carousel-item active');//Caroussel d'image à droite
    const card = document.getElementsByClassName('card h-100'); //Carte produit - image
    const cardTitle = document.getElementsByClassName("card-title") //Carte produit - nom
    const price = document.getElementsByClassName("card-title") //Carte produit - prix
    const cardFooter = document.getElementsByClassName("card-footer") //Carte produit - référence id

    for (let i = 0; i < teddies.length; i++) {
        console.log(teddies[i]);
    
        //Liste des produits à gauche : <a aria-label="Lien vers la page produit " href="pages/produit.html" class="list-group-item"></a>
        const $a = document.createElement("a");
        $a.setAttribute ("aria-label", "Lien vers la page produit");
        $a.setAttribute ("href", "produit.html");
        $a.className = "list-group-item";
        $a.innerText = teddies[i].name;
        productList.appendChild($a);

        //Caroussel à droite : <img class="d-block img-fluid" src="" alt="Ourson ">
        const $imgCarousel = document.createElement("img");
        $imgCarousel.className = "d-block img-fluid";
        $imgCarousel.setAttribute ("src", "../../backend/images/teddy_1.jpg");
        // ou cette syntaxe : $imgCarousel.src = "../../backend/images/teddy_1.jpg";
        $imgCarousel.setAttribute ("alt", "Ourson");
        $imgCarousel.onload = teddies[i].imageUrl;
        carouselItem.appendChild($img);

        //Carte produit - image : <a aria-label="Lien vers la page produit" href="produit.html">
        //<img class="card-img-top" src="../backend/images/teddy_1.jpg" alt="Ourson"></a>
        const $imgLink = document.createElement("a");
        $imgLink.className = "img-link";
        $imgLink.setAttribute ("aria-label", "Lien vers la page produit");
        $imgLink.setAttribute ("href", "produit.html");
        card.appendChild($imgLink);
        const $imgCard = document.createElement("img");
        $imgCard.className = "card-img-top";
        $imgCard.setAttribute ("src", "../../backend/images/teddy_1.jpg");
        // ou cette syntaxe : $imgCard.src = "../../backend/images/teddy_1.jpg";
        $imgCard.setAttribute ("alt", "Ourson");
        $imgCard.onload = teddies[i].imageUrl;
        img-link.appendChild($imgCard);

        //Carte produit - nom : <a aria-label="Lien vers la page produit" href="produit.html">Norbert</a>
        const $name = document.createElement("a");
        $name.setAttribute ("aria-label", "Lien vers la page produit");
        $name.setAttribute ("href", "produit.html");
        $name.innerText = teddies[i].name;
        cardTitle.appendChild($name);

        //Carte produit - prix : <h3>2900 euros</h3>
        const $price = document.createElement("h3");
        $price.innerText = teddies[i].price;
        price.appendChild($price + " euros");

        //Carte produit - id : <small class="text-muted">Réf. 5be9c8541c9d440000665243</small>
        const $objectId = document.createElement("small");
        $objectId.className = "text-muted";
        $objectId.innerText = teddies[i]._id;
        cardFooter.appendChild("Réf. " + $objectId);
    }
    

});


