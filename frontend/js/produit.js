const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/teddies');

xhr.send();

xhr.addEventListener('load', function() {
    console.log(JSON.parse(xhr.responseText));
    const teddies = JSON.parse(xhr.responseText);
    const section1 = document.getElementsById("section1");//Image du produit
    const section2 = document.getElementsById("section2");//Nom du produit
    const article = document.getElementsByTagName("article"); //Description - réf - prix
    const label = document.getElementsByTagName("form-group col-2"); // Label couleur
    const select = document.getElementsByTagName("form-group col-3"); //Choix des couleurs
    const button = document.getElementsByTagName("button"); //Bouton ajouter au panier

    teddies.forEach (teddie => {
        this.teddie(teddies[0]);

    //Image produit : <h2><img class="img-fluid" id="teddie" src="http://localhost:3000/images/teddy_1.jpg" alt="Ourson"></h2>
    const $h2 = document.createElement("h2");
    section1.appendChild($h2);
    const $img = document.createElement("img");
    $img.className = "img-fluid";
    $img.setAtribute ("id","teddie");
    $img.setAtribute ("src", teddies.imageUrl)
    $img.setAttribute ("alt", "Ourson");
    $img.onload = teddies[i].imageUrl;
    $h2.appendChild($img);

    //Nom du produit : <h2 class="font-weight-bold">Norbert</h2>
    const $name = document.createElement("h2");
    $name.className = "font-weight-bold";
    $name.innerText = teddies[0].name;
    section2.appendChild($name);
    
    //Description produit (p)
    const $p = document.createElement("p");
    $p.innerText = teddies[0].description;
    article.appendChild($p);

    //Référence et prix : <h2 class="font-weight-bold">Réf. 5be9c8541c9d440000665243 - Prix : 2900 euros.</h2>
    const $refPrice = document.createElement("h2");   
    $refPrice.className = "font-weight-bold";
    $refPrice.innerText = teddies[0]._id;
    $refPrice.innerText = teddies[0].price;
    article.appendChild("Réf. " + $refPrice._id + " - " + $refPrice.price + " euros");

    //Label couleur :  <label for="color">Couleur</label>
    const $label = document.createElement("label");    
    $label.setAttribute ("for", "color")
    $label.innerText = "Couleur";
    label.appendChild($label);

    //Menu déroulant
    const $select = document.createElement("select"); 
    $select.setAttribute ("id", "color");
    $select.className = "form-control";
    select.appendChild($select);
    const $option = document.createElement("option"); 
    $option.value ("tan", "chocolate", "black", "white");
    $select.appendChild($option);
    
    //Bouton ajouter au panier :  <button type="submit" class="btn btn-info">Ajouter dans votre panier</button>
    const $button = document.createElement("button");
    $button.type ("submit");
    $select.className = "btn btn-info";
    $label.innerText = "Ajouter dans votre panier";
    button.appendChild($button);   

    });

});