//Récupération du localStorage de l'index pour affichage de la page produit choisie
const productDetails = JSON.parse(localStorage.getItem("product_value_teddies"));
console.log(productDetails);

//Récupération de l'élément parent de produit.html
//Corps de la page : main
const $main = document.querySelector('main');


//H1 Titre de la page
const $h1 = document.createElement('h1');
$h1.className = "font-weight-bold";
$h1.innerText = productDetails.name + "\n\n";
$main.appendChild($h1);

//Div container : Page produit
const $productPage = document.createElement('div');
$productPage.setAttribute("id", "product-page")
$productPage.className = "container";
$main.appendChild($productPage);


//SECTION 1 Image =============================================
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

//FIN SECTION 1 Image =======================================


//SECTION 2 ========================================== 
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

//Description produit <p>
const $description = document.createElement("p");
$description.innerText = productDetails.description;
$article.appendChild($description);

//Référence et prix : <h2 class="font-weight-bold">Réf. - Prix :  euros.</h2>
const $objectIdPrice = document.createElement("h2");
$objectIdPrice.className = "font-weight-bold";
$objectIdPrice.innerText = "Réf. " + productDetails._id + " - " + "Prix : " + productDetails.price + " euros";
$article.appendChild($objectIdPrice);

//Liens vers les conseils <p><a></a></p>
const $conseil = document.createElement("p");
$conseil.innerText = "\nPour l'entretien de vos peluches, veuillez consulter notre page";
$article.appendChild($conseil);

const $lienConseil = document.createElement("a");
$lienConseil.className = "font-weight-bold text-info";
$lienConseil.setAttribute("href", "conseils.html");
$lienConseil.innerText = " conseils."
$conseil.appendChild($lienConseil);

//Fin Article---------------------------------------------------

//Information du choix de la couleur
const $info = document.createElement("p");
$info.className = "font-weight-bold";
$info.innerText = "\nChoisissez la couleur de votre peluche, ainsi que le nombre de peluche souhaité :\n";
$section2.appendChild($info);


//Formulaire----------------------------------------
const $form = document.createElement("form");
$section2.appendChild($form);

//Div inline
const $inline = document.createElement("div");
$inline.className = "form-inline";
$form.appendChild($inline);

//Div form-group col-8 col-lg-6
const $formGroup1 = document.createElement("div");
$formGroup1.className = "form-group col-8 col-lg-6";
$inline.appendChild($formGroup1);

//Menu déroulant couleur <select>========================
const $selectColors = document.createElement("select");
$selectColors.setAttribute("id", "color");
$selectColors.className = "form-control";
$formGroup1.appendChild($selectColors);

//Ajouter toutes les couleurs au menu déroulant
const productColors = productDetails.colors;
for (let x = 0; x < productColors.length; x++) {
    console.log(productColors[x]);

    //Menu déroulant <option>
    const $optionColors = document.createElement("option");
    $optionColors.setAttribute("value", productColors);
    $optionColors.innerText = productColors[x];
    $selectColors.appendChild($optionColors);
}
//Fin Menu déroulant couleur <select>========================

//Menu déroulant quantité <select>============================
const $selectQuantity = document.createElement("select");
$selectQuantity.setAttribute("id", "quantity");
$selectQuantity.className = "form-control";
$formGroup1.appendChild($selectQuantity);

//Ajouter la quantité d'achat avec un maximum de 5 articles
let productQuantity = 0;
while (productQuantity < 5) {
    productQuantity++;

    const $optionQuantity = document.createElement("option");
    $optionQuantity.setAttribute("value", productQuantity);
    $optionQuantity.className = "col-8 col-lg-6";
    $optionQuantity.innerText = productQuantity;
    $selectQuantity.appendChild($optionQuantity);
}
//Fin Menu déroulant quantité <select>============================

//Div form-group col-8 col-lg-6
const $col10 = document.createElement("div");
$col10.className = "form-group col-8 col-lg-6";
$inline.appendChild($col10);

//Bouton ajouter au panier 
const $button = document.createElement("button");
$button.setAttribute("type", "submit"), ("onclick", "window.location.href='panier.html");
$button.className = "btn btn-info";
$button.setAttribute("href", "panier.html");
$button.innerText = "Ajouter dans votre panier";
$col10.appendChild($button);

//Focus sur le menu déroulant
$selectColors.focus();

//Fin du formulaire------------------------------------------------

//FIN SECTION 2=====================================

//Stocker en local les éléments de la page produit
$form.addEventListener('submit', function(e){
const saveProductPage = {
    productId: productDetails._id,
    productName: productDetails.name,
    productColors: productColors.value,
    ProductNumber: productQuantity.value,
    productPrice: productDetails.price
}
const saveToLocalStorageProduct = () => {
    const storageProduct = JSON.stringify(saveProductPage);
    localStorage.setItem("chosen_product", storageProduct);
    console.log(saveToLocalStorageProduct);
}
});

//$button.addEventListener('onclick', saveToLocalStorageProduct);//save
