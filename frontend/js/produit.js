//Récupération du stockage local
const teddie_id = JSON.parse(localStorage.getItem("product_value_teddies")).selectedId;

//Récupération de l'API
ajaxGet("http://localhost:3000/api/teddies/" + teddie_id).then(function (result) {
    displayProductDetails(result);
}).catch(function (error) {
    console.log(error);
    alert("Une erreur est survenue, veuillez réessayer dans un moment");
});

//Affichage dynamique de la page
function displayProductDetails(productDetails) {

    //Récupération de l'élément parent de produit.html
    const $main = document.querySelector("main"); //Corps de la page : main

    //H1 Titre de la page
    const $h1 = document.createElement("h1");
    $h1.className = "font-weight-bold";
    $h1.innerText = productDetails.name + "\n\n";
    $main.appendChild($h1);

    //Div container : Page produit
    const $productPage = document.createElement("div");
    $productPage.setAttribute("id", "product-page");
    $productPage.className = "container";
    $main.appendChild($productPage);


    //SECTION 1 : Image à gauche ==================================================================================
    const $section1 = document.createElement("section");
    $section1.setAttribute("id", "section1");
    $productPage.appendChild($section1);

    //Image produit : <h2><img></img></h2>
    const $h2 = document.createElement("h2");
    $section1.appendChild($h2);

    const $img = document.createElement("img");
    $img.className = "img-fluid";
    $img.setAttribute("id", "teddie");
    $img.setAttribute("src", productDetails.imageUrl);
    $img.setAttribute("alt", "Ourson");
    $h2.appendChild($img);

    //FIN SECTION 1 : Image à gauche ================================================================================


    //SECTION 2 : partie droite ============================================================================ 
    const $section2 = document.createElement("section");
    $section2.setAttribute("id", "section2");
    $productPage.appendChild($section2);

    //Nom du produit : <h2>
    const $name = document.createElement("h2");
    $name.className = "font-weight-bold";
    $name.innerText = "\n\n" + productDetails.name;
    $section2.appendChild($name);


    //Article----------------------------------------
    const $article = document.createElement("article");
    $section2.appendChild($article);

    //Description produit 
    const $description = document.createElement("p");
    $description.innerText = productDetails.description;
    $article.appendChild($description);

    //Référence et prix 
    const $objectIdPrice = document.createElement("h2");
    $objectIdPrice.className = "font-weight-bold";
    $objectIdPrice.innerText = "Réf. " + productDetails._id + " - " + "Prix : " + (productDetails.price / 100) + " euros";
    $article.appendChild($objectIdPrice);

    //Liens vers les conseils 
    const $conseil = document.createElement("p");
    $conseil.innerText = "\nPour l'entretien de vos peluches, veuillez consulter notre page";
    $article.appendChild($conseil);

    const $lienConseil = document.createElement("a");
    $lienConseil.className = "font-weight-bold text-info";
    $lienConseil.setAttribute("href", "conseils.html");
    $lienConseil.innerText = " conseils.";
    $conseil.appendChild($lienConseil);

    //Fin Article---------------------------------------------------


    //Information du choix de la couleur et de la quantité
    const $info = document.createElement("p");
    $info.className = "font-weight-bold";
    $info.innerText = "\nChoisissez la couleur de votre peluche, ainsi que le nombre de peluche souhaité :\n";
    $section2.appendChild($info);


    //Formulaire-----------------------------------------------------------------------------------
    const $form = document.createElement("form");
    $section2.appendChild($form);

    //Div inline
    const $inline = document.createElement("div");
    $inline.className = "form-inline";
    $form.appendChild($inline);


    //Menu déroulant couleur ==================================

    //Div couleur
    const $formGroup1 = document.createElement("div");
    $formGroup1.className = "form-group col-8 col-lg-3";
    $inline.appendChild($formGroup1);

    //label couleur
    const $colorDropDownMenu = document.createElement("label");
    $colorDropDownMenu.setAttribute("for", "color");
    $formGroup1.appendChild($colorDropDownMenu);

    //select couleur
    const $selectColors = document.createElement("select");
    $selectColors.setAttribute("id", "color");
    $selectColors.setAttribute("required", "");
    $selectColors.className = "form-control bg-light text-dark";
    $colorDropDownMenu.appendChild($selectColors);

    //Ajouter toutes les couleurs au menu déroulant
    let productColors = productDetails.colors;
    for (let x = 0; x < productColors.length; x++) {
        console.log(productColors[x]);

        //option couleur
        const $optionColors = document.createElement("option");
        $optionColors.innerText = productColors[x];
        $optionColors.value = productColors[x];
        $selectColors.appendChild($optionColors);
    }

    //Focus sur le menu déroulant couleurs
    $selectColors.focus();

    //Fin Menu déroulant couleur ====================================



    //Menu déroulant quantité =======================================

    //Div quantité
    const $formGroup2 = document.createElement("div");
    $formGroup2.className = "form-group col-8 col-lg-3";
    $inline.appendChild($formGroup2);

    //label quantité
    const $QuantityDropDownMenu = document.createElement("label");
    $QuantityDropDownMenu.setAttribute("for", "quantity");
    $formGroup2.appendChild($QuantityDropDownMenu);

    //select quantité
    const $selectQuantity = document.createElement("select");
    $selectQuantity.setAttribute("id", "quantity");
    $selectQuantity.setAttribute("required", "");
    $selectQuantity.className = "form-control bg-light text-dark";
    $QuantityDropDownMenu.appendChild($selectQuantity);

    //Ajouter la quantité d'achat avec un maximum de 5 articles
    let productQuantity = 0;
    while (productQuantity < 5) {
        productQuantity++;

        const $optionQuantity = document.createElement("option");
        $optionQuantity.innerText = productQuantity;
        $selectQuantity.appendChild($optionQuantity);
    }
    //Fin Menu déroulant quantité =====================================



    //BOUTON Ajouter au panier=======================================

    //Div bouton
    const $col10 = document.createElement("div");
    $col10.className = "form-group col-8 col-lg-6";
    $inline.appendChild($col10);

    //Bouton ajouter au panier 
    const $AddToCartButton = document.createElement("button");
    $AddToCartButton.className = "btn btn-info";
    $AddToCartButton.setAttribute("aria-label", "Bouton ajouter au panier");
    $AddToCartButton.setAttribute("type", "submit"),
        $AddToCartButton.innerText = "Ajouter dans votre panier";
    $col10.appendChild($AddToCartButton);

    //Ajouter un article dans la page panier
    $AddToCartButton.addEventListener("click", (e) => {
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem("product_value_teddies"));

        //Cherche si l'index et la couleur du produit sont déjà stockés
        const index = data.orders.findIndex(teddy => teddy.color == $selectColors.value && teddie_id == productDetails._id);

        //Si l'index avec la couleur n'est pas déjà présent, alors ajouter une nouvelle ligne produit avec la nouvelle couleur
        if (index == -1) {
            data.orders.push({
                imageUrl: productDetails.imageUrl,
                _id: productDetails._id,
                name: productDetails.name,
                color: $selectColors.value,
                quantity: $selectQuantity.value,
                price: productDetails.price,

            });

        } else {
            //Sinon si l'index avec la couleur est déjà présent, modifier la quantité de la ligne existante 
            const newQuantity = parseInt(data.orders[index].quantity) + parseInt($selectQuantity.value);
            data.orders[index].quantity = newQuantity;

        }
        console.log(data);

        //Stocker en local, l'ajout de l'article
        localStorage.setItem("product_value_teddies", JSON.stringify(data));

        //Demande de redirection de page
        if (confirm("Voulez-vous voir votre panier ?")) {
            window.location.href = "panier.html";
        } else if (confirm("Voulez-vous retourner sur le catalogue ?")) {
            window.location.href = "index.html";
        }
    });

    //Fin BOUTON Ajouter au panier=======================================

    //Fin du formulaire----------------------------------------------------------------------------

    //FIN SECTION 2 : partie droite ======================================================================
}