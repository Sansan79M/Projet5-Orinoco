const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/teddies');

xhr.send();

xhr.addEventListener('load', function() {
    console.log(JSON.parse(xhr.responseText));
    const teddies = JSON.parse(xhr.responseText);

    //Corps de la page : main
    const $main = document.querySelector('main');

    //H1 Titre de la page
    const $h1 = document.createElement('h1');
    $h1.className = "font-weight-bold";
    $h1.innerText = "Norbert notre tête en l'air !\n\n";
    $main.appendChild($h1);

    //Div container : Page produit
    const $productPage = document.createElement('div'); 
    $productPage.setAttribute ("id", "product-page")
    $productPage.className =  "container";
    $main.appendChild($productPage);
  

    //SECTION 1=========================================
    const $section1 = document.createElement("section");  
    $section1.setAtribute ("id", "section1");
    $productPage.appendChild($section1);

    //Image produit : <h2><img></img></h2>
    const $h2 = document.createElement("h2");
    const $img = document.createElement("img");
    $img.className = "img-fluid";
    $img.setAtribute ("id","teddie");
    $img.setAtribute ("src", teddies[0].imageUrl);
    $img.setAttribute ("alt", "Ourson");
    $section1.appendChild($h2);
    $h2.appendChild($img);
    
    //FIN SECTION 1=======================================


    //SECTION 2 ========================================== 
    const $section2 = document.createElement("section"); 
    $section2.setAtribute ("id", "section2");
    $productPage.appendChild($section2);

    //Nom du produit : <h2>
    const $name = document.createElement("h2");
    $name.className = "font-weight-bold";
    $name.innerText = teddies[0].name;
    $section2.appendChild($name);


    //Article----------------------------------------
    const $article = document.createElement("article");
    $section2.appendChild($article);
    
    //Description produit <p>
    const $description = document.createElement("p");
    $description.innerText = teddies[0].description;
    $article.appendChild($description);

    //Référence et prix : <h2 class="font-weight-bold">Réf. - Prix :  euros.</h2>
    const $objectIdPrice = document.createElement("h2");   
    $objectIdPrice.className = "font-weight-bold";
    $objectIdPrice.innerText = "Réf. " + teddies[0]._id + " - " + teddies[0].price + " euros";
    $article.appendChild($objectIdPrice);

    //Liens vers les conseils <p><a></a></p>
    const $conseil = document.createElement("p");
    $conseil.innerText = "Pour l'conseil de vos peluches, veuillez consulter notre page";
    $article.appendChild($conseil);
    const $lienConseil = document.createElement("a");
    $lienConseil.className = "font-weight-bold text-info";
    $lienConseil.setAttribute ("href", "conseil.html");
    $lienConseil.innerText = "conseils."
    $conseil.appendChild($lienConseil);

    //Fin Article---------------------------------------------------
	
    //Information du choix de la couleur
    const $info = document.createElement("p");
    $info.className = "font-weight-bold";
    $info.innerText = "Choisissez la couleur de votre peluche :\n";//avec un saut de ligne
    $section2.appendChild($info);


    //Formulaire----------------------------------------

    //Formulaire
    const $form = document.createElement("form");
    $section2.appendChild($form);

    //Div inline
    const $inline = document.createElement("div");
    $inline.className = "form-inline";
    $form.appendChild($inline);

    //Div form-group col-2
    const $col2 = document.createElement("div");
    $col2.className = "form-group col-2 text-left";
    $inline.appendChild($col2);

    //Label couleur 
    const $label = document.createElement("label");    
    $label.setAttribute ("for", "color")
    $label.innerText = "Couleur";
    $col2.appendChild($label);

    //Div form-group col-3
    const $col3 = document.createElement("div");
    $col3.className = "form-group col-3";
    $inline.appendChild($col3);

    //Menu déroulant <select>
    const $select = document.createElement("select"); 
    $select.setAttribute ("id", "color");
    $select.className = "form-control";
    $col3.appendChild($select);

    //Menu déroulant <option>
    const $option = document.createElement("option"); 
    $option.value (teddies[0].colors);
    $select.appendChild($option);

    //Div form-group col-6
    const $col6 = document.createElement("div");
    $col6.className = "form-group col-6";
    $inline.appendChild($col6);
    
    //Bouton ajouter au panier 
    const $button = document.createElement("button");
    $button.type ("submit");
    $select.className = "btn btn-info";
    $label.innerText = "Ajouter dans votre panier";
    $col6.appendChild($button);   

    //Fin du formulaire----------------------------

    //FIN SECTION 2=====================================
   


});