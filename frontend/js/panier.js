//Récupération du localStorage de l'index pour affichage de la page produit choisie
const productOrder = JSON.parse(localStorage.getItem("chosen_product"));
console.log(productOrder);

//Corps de la page : Main
const $command = document.querySelector('#command');

//div container1------------------------------
const $container1 = document.createElement('div');
$container1.className = "container";
$container1.setAttribute("id", "container1");
$command.appendChild($container1);

//Image logo panier
const $imgLogo = document.createElement('img');
$imgLogo.className = "img-fluid";
$imgLogo.setAttribute("src", "img/logo-orinoco-panier.png");
$imgLogo.setAttribute("alt", "Logo d'Orinoco avec un caddie");
$container1.appendChild($imgLogo);

//H1 Titre de la page
const $title = document.createElement('h1');
$title.innerText = "\nVoici le détail de votre panier.\n\n";
$container1.appendChild($title);

//Fin Container1-------------------------------

//Div container2-------------------------------
const $container2 = document.createElement('div');
$container2.className = "container";
$container2.setAttribute("id", "container2")
$command.appendChild($container2);

//Div table responsive
const $tableResponsive = document.createElement('div');
$tableResponsive.className = "table-responsive";
$container2.appendChild($tableResponsive);

//table
const $table = document.createElement('table');
$table.setAttribute("id", "shopping-cart");
$tableResponsive.appendChild($table);

//1ere ligne du tableau <tr>
const $tr1 = document.createElement('tr');
$table.appendChild($tr1);

//Les champs de la 1ere ligne du tableau <th>
const $th1 = document.createElement('th');
const $th2 = document.createElement('th');
const $th3 = document.createElement('th');
const $th4 = document.createElement('th');
const $th5 = document.createElement('th');

$th1.innerText = "Référence produit";
$th2.innerText = "Nom du produit";
$th3.innerText = "Couleur du produit";
$th4.innerText = "Total produit";
$th5.innerText = "Prix unitaire du produit";

$tr1.appendChild($th1);
$tr1.appendChild($th2);
$tr1.appendChild($th3);
$tr1.appendChild($th4);
$tr1.appendChild($th5);

//2eme ligne du tableau <tr>
const $tr2 = document.createElement('tr');
$table.appendChild($tr2);

//Les champs de la 2eme ligne du tableau <td>
const $td1 = document.createElement('td');
const $td2 = document.createElement('td');
const $td3 = document.createElement('td');
const $td4 = document.createElement('td');
const $td5 = document.createElement('td');

$td1.innerText = productOrder._id;
$td2.innerText = productDetails.name;
$td3.innerText = productColors.value;
$td4.innerText = productQuantity.value;
$td5.innerText = productDetails.price + " euros";

$tr2.appendChild($td1);
$tr2.appendChild($td2);
$tr2.appendChild($td3);
$tr2.appendChild($td4);
$tr2.appendChild($td5);


//3eme ligne du tableau <tr>
const $tr3 = document.createElement('tr');
$table.appendChild($tr3);

//champs de la 3eme ligne du tableau 
const $th6 = document.createElement('th');
$th6.setAttribute("id", "total-amount");
$th6.setAttribute("colspan", "4");
$th6.innerText = "Montant total de la commande";
$tr3.appendChild($th6);

const $td6 = document.createElement('td');
$td6.className = "font-weight-bold";
$td6.innerText = number(productQuantity.value)*number(productDetails.price);
$tr3.appendChild($td6);

//Stocker en local le montant de la commande
localStorage.setItem("basket", $td6.innerText);

//Saut de ligne
const $lineBreak1 = document.createElement('br');
$container2.appendChild($lineBreak1);

//Bouton suppression panier
const $deleteCartButton = document.createElement('button');
$deleteCartButton.setAttribute(("type", "submit"), ("onclick", "clear"));
$deleteCartButton.setAttribute("type", "reset");
$deleteCartButton.setAttribute("action", "remove");
$deleteCartButton.className = "btn btn-info";
$deleteCartButton.innerText = "Supprimer le panier";
$container2.appendChild($deleteCartButton);

//Suppression du localStorage du panier
localStorage.clear;


//Fin Container2-------------------------------


//Div container3-------------------------------
const $container3 = document.createElement('div');
$container3.className = "container";
$container3.setAttribute("id", "container3")
$command.appendChild($container3);

//Titre h2
const $h2 = document.createElement('h2');
$h2.innerText = "Veuillez compléter le formulaire pour valider votre commande.\n\n";
$container3.appendChild($h2);

//Formulaire******************************************
const $form = document.createElement('form');
$form.setAttribute("method", "post");
$form.setAttribute("action", "mailto:contact@orinoco.fr");
$container3.appendChild($form);

//1ere ligne de champ----------------------------------------------
const $rowFields1 = document.createElement('div');
$rowFields1.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields1);

//label nom 
const $name = document.createElement('label');
$name.setAttribute("for", "name")
$name.className = "col-2 text-left";
$name.innerText = "Nom";
$rowFields1.appendChild($name);

//input nom
const $nameField = document.createElement('input');
$nameField.setAttribute("type", "text"), ("id", "name"), ("name", "nom");
$nameField.setAttribute("required", "");

$nameField.className = "form-control col-3";
$rowFields1.appendChild($nameField);

//div col-1 espace
const $space1 = document.createElement('div');
$space1.className = "col-1";
$rowFields1.appendChild($space1);

//label prénom 
const $firstName = document.createElement('label');
$firstName.setAttribute("for", "first-name")
$firstName.className = "col-2 text-left";
$firstName.innerText = "Prénom";
$rowFields1.appendChild($firstName);

//input prénom
const $firstNameField = document.createElement('input');
$firstNameField.setAttribute("type", "text"), ("id", "first-name"), ("name", "prénom");
$firstNameField.setAttribute("required", "");
$firstNameField.className = "form-control col-3";
$rowFields1.appendChild($firstNameField);

//Fin 1ere ligne de champ----------------------------------------------


//2eme ligne de champ----------------------------------------------
const $rowFields2 = document.createElement('div');
$rowFields2.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields2);

//label adresse 
const $adress = document.createElement('label');
$adress.setAttribute("for", "adress")
$adress.className = "col-2 text-left";
$adress.innerText = "Adresse";
$rowFields2.appendChild($adress);

//input adresse
const $adressField = document.createElement('input');
$adressField.setAttribute("type", "text"), ("id", "adress"), ("name", "adresse");
$adressField.setAttribute("required", "");
$adressField.className = "form-control col-3";
$rowFields2.appendChild($adressField);

//div col-1 espace
const $space2 = document.createElement('div');
$space2.className = "col-1";
$rowFields2.appendChild($space2);

//label code postal 
const $postalCode = document.createElement('label');
$postalCode.setAttribute("for", "postal-code")
$postalCode.className = "col-2 text-left";
$postalCode.innerText = "Code postal";
$rowFields2.appendChild($postalCode);

//input code postal 
const $postalCodeField = document.createElement('input');
$postalCodeField.setAttribute("type", "text"), ("id", "postal-code"), ("name", "code-postal");
$postalCodeField.setAttribute("required", "");
$postalCodeField.setAttribute("maxlength", "5");
$postalCodeField.setAttribute("pattern", "[0-9]{5}");
$postalCodeField.className = "form-control col-3";
$rowFields2.appendChild($postalCodeField);

//Fin 2eme ligne de champ----------------------------------------------


//3eme ligne de champ----------------------------------------------
const $rowFields3 = document.createElement('div');
$rowFields3.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields3);

//label ville 
const $city = document.createElement('label');
$city.setAttribute("for", "city")
$city.className = "col-2 text-left";
$city.innerText = "Ville";
$rowFields3.appendChild($city);

//input ville 
const $cityField = document.createElement('input');
$cityField.setAttribute("type", "text"), ("id", "city"), ("name", "ville");
$cityField.setAttribute("required", "");
$cityField.className = "form-control col-3";
$rowFields3.appendChild($cityField);

//div col-1 espace
const $space3 = document.createElement('div');
$space3.className = "col-1";
$rowFields3.appendChild($space3);

//label téléphone
const $phone = document.createElement('label');
$phone.setAttribute("for", "phone")
$phone.className = "col-2 text-left";
$phone.innerText = "Télephone";
$rowFields3.appendChild($phone);

//input téléphone  
const $phoneField = document.createElement('input');
$phoneField.setAttribute("type", "tel"), ("id", "phone"), ("name", "téléphone");
$phoneField.setAttribute("required", "");
$phoneField.setAttribute("maxlength", "10");
$phoneField.setAttribute("pattern", "0[1-9][0-9]{8}");
$phoneField.className = "form-control col-3";
$rowFields3.appendChild($phoneField);

//Fin 3eme ligne de champ----------------------------------------------


//4eme ligne de champ----------------------------------------------
const $rowFields4 = document.createElement('div');
$rowFields4.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields4);

//label email
const $email = document.createElement('label');
$email.setAttribute("for", "email")
$email.className = "col-2 text-left";
$email.innerText = "Email";
$rowFields4.appendChild($email);

//input email
const $emailField = document.createElement('input');
$emailField.setAttribute("type", "email"), ("id", "email"), ("name", "email");
$emailField.setAttribute("required", "");
$emailField.className = "form-control col-3";
$rowFields4.appendChild($emailField);

//div col-1 espace
const $space4 = document.createElement('div');
$space4.className = "col-1";
$rowFields4.appendChild($space4);

//label mot de passe
const $password = document.createElement('label');
$password.setAttribute("for", "password")
$password.className = "col-2 text-left";
$password.innerText = "Mot de passe";
$rowFields4.appendChild($password);

//input mot de passe  
const $passwordField = document.createElement('input');
$passwordField.setAttribute("type", "password"), ("id", "password"), ("name", "mot-de-passe");
$passwordField.setAttribute("required", "");
$passwordField.className = "form-control col-3";
$rowFields4.appendChild($passwordField);

//Fin 4eme ligne de champ----------------------------------------------

//Saut de ligne
const $lineBreak2 = document.createElement('br');
$container3.appendChild($lineBreak2);

//Bouton---------
const $button = document.createElement('button');
$button.setAttribute(("type", "submit"), ("onclick", "window.location.href='confirmation-commande.html/';"));
$button.className = "btn btn-info";
$button.innerText = "Valider votre commande";
$container3.appendChild($button);

//Focus sur le 1er champ à remplir
$nameField.focus();
