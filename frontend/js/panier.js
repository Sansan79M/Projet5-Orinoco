//Récupération des infos produits
const storage = JSON.parse(localStorage.getItem("product_value_teddies"));




//Récupération de l'élément parent de panier.html    
//Corps de la page : Main
const $command = document.querySelector('#command');


//div container1---------------------------------------
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

//Fin Container1------------------------------------------


//Div container2 : PANIER-------------------------------
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

function setTableHeader() {
    //1ere ligne d'entête du tableau <tr>¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
    const $tr1 = document.createElement('tr');
    $tr1.setAttribute("id", "basket-header")
    $table.appendChild($tr1);
    $tr1.innerHTML +=
        `<th>Photo</th>
     <th>Référence</th>
     <th>Nom</th>
     <th>Couleur</th>
     <th>Nombre</th>
     <th>Prix unitaire</th>
     <th>Prix total</th>
     <th>Supprimer</th>
    `
}

//Lignes des produits commandés <tr>¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
let totalA = 0;
let totalQ = 0;

function setTableBody() {

    for (let i = 0; i < storage.orders.length; i++) {
        const product = storage.orders[i];
        const subtotal = (product.price / 100) * product.quantity;
        totalA += subtotal;

        const $tr = document.createElement('tr');
        $table.appendChild($tr);

        $tr.innerHTML +=
        `<td><img src="${product.imageUrl}"></td>
         <td>${product._id}</td>
         <td>${product.name}</td>
         <td>${product.color}</td>
         <td>${product.quantity}</td>
         <td>${product.price / 100} euros</td>
         <td>${subtotal} euros</td>`

        const $trash = document.createElement('td');
        $trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
        $tr.appendChild($trash);

        if (product.quantity > 0) {
            totalQ += parseInt(product.quantity);
        }

        //Suppression d'un article
        $trash.addEventListener('click', () => {
            if (confirm("Voulez-vous vraiment supprimer l'article ?")) {
                const index = storage.orders.findIndex(element => element._id === product._id);
                storage.orders.splice(index, 1); //supprime l'article de l'index
                $table.removeChild($tr); //supprime la ligne produit
                totalA -= subtotal; //refait le total du montant de la commande
                $totalAmount.innerText = `${totalA} euros`; //affiche le nouveau montant total
                localStorage.setItem("product_value_teddies", JSON.stringify(storage)); //supprime l'article choisi du localStorage
                totalQ -= parseInt(product.quantity); //refait le total du nombre d'articles
                $numberProducts.innerText = `${totalA}`; //affiche le nouveau nombre total d'articles

                if (setTableBody = "null") {
                    deleteCartAndForm()
                }
            }
        });


    }
}

//Dernière ligne du tableau <tr>¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤

function setTableFooter(totalA) {

    const $tr3 = document.createElement('tr');
    $tr3.setAttribute("id", "total-basket-amount")
    $table.appendChild($tr3);

    //Champs de la 3eme ligne du tableau 
    const $numberAndAmount = document.createElement('th');
    $numberAndAmount.setAttribute("id", "numberAndAmount");
    $numberAndAmount.setAttribute("colspan", "4");
    $numberAndAmount.innerText = "Nombre d'articles  &  montant total de la commande";
    $tr3.appendChild($numberAndAmount);

    //Nombre de produits au total
    const $numberProducts = document.createElement('td');
    $numberProducts.className = "font-weight-bold";
    $numberProducts.innerText = `${totalQ}`;
    $tr3.appendChild($numberProducts);

    //Champ vide entre le nombre et le montant
    $tr3.appendChild($emptyFields = document.createElement('td'));

    //Montant de la commande
    const $totalAmount = document.createElement('td');
    $totalAmount.className = "font-weight-bold";
    $totalAmount.innerText = `${totalA} euros`;
    $tr3.appendChild($totalAmount);

    //Stocker en local le montant de la commande
    localStorage.setItem("basket-amount", $totalAmount.innerText);
}

//On appelle les fonctions du tableau
setTableHeader();
setTableBody();
setTableFooter(totalA);

//FIN DU TABLEAU PANIER-----------------------------------------

//Saut de ligne
$container2.appendChild($lineBreak1 = document.createElement('br'));

//Bouton pour continuer les achats
const $continuePurchaseButton = document.createElement('a');
$continuePurchaseButton.className = "btn btn-info";
$continuePurchaseButton.setAttribute("type", "button")
$continuePurchaseButton.setAttribute("aria-label", "Bouton retour vers la page d'accueil");
$continuePurchaseButton.setAttribute("id", "continue");
$continuePurchaseButton.setAttribute("href", "index.html");
$continuePurchaseButton.innerText = "Continuer mes achats";
$container2.appendChild($continuePurchaseButton);

//Bouton suppression panier
const $deleteCartButton = document.createElement('button');
$deleteCartButton.className = "btn btn-info";
$deleteCartButton.setAttribute("type", "button")
$deleteCartButton.setAttribute("aria-label", "Bouton suppression du panier");
$deleteCartButton.setAttribute("id", "stop");
$deleteCartButton.innerText = "Supprimer le panier";
$container2.appendChild($deleteCartButton);

//Demande de confirmation de suppression du panier
$deleteCartButton.addEventListener('click', function deleteCartAndForm() {
    if (confirm('Voulez-vous vraiment supprimer le panier ?')) {

        $title.innerHTML = "<br>Votre panier est vide !<br><br>";//modification du titre
        $title.style.fontSize = "30px";//fontSize du titre
        $title.style.color = "red";//couleur du titre

        $table.innerHTML = ""; //suppression complète de la table
        setTableHeader(); //afficher le header du panier
        setTableFooter(0); //afficher le footer du panier avec un montant et un total produit à 0 euros

        storage.orders = []; //suppression du n° de commande

        localStorage.setItem("product_value_teddies", JSON.stringify(storage));//suppression du localStorage

        $continuePurchaseButton.style.display = "none"; //suppression du bouton retour à l'accueil
        $deleteCartButton.style.display = "none"; //suppression du bouton suppression panier

        $h2.innerHTML = ""; //suppression du h2
        $form.innerHTML = `<a aria-label="Lien vers la page d'accueil" href="index.html">
        Cliquez ici pour retourner sur la page d'accueil.</a>`; //remplacement du formulaire par un message de retour à l'accueil
        $form.style.fontSize = "30px";//fontSize du nouveau <a>

    }
});


//Fin Container2---------------------------------------------------------------


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
$container3.appendChild($form = document.createElement('form'));

//1ere ligne de champ----------------------------------------------
const $rowFields1 = document.createElement('div');
$rowFields1.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields1);

//label nom 
const $lastName = document.createElement('label');
$lastName.setAttribute("for", "name")
$lastName.className = "col-2 text-left";
$lastName.innerText = "Nom";
$rowFields1.appendChild($lastName);

//input nom
const $LastNameField = document.createElement('input');
$LastNameField.setAttribute("type", "text");
$LastNameField.setAttribute("id", "name"), ("name", "nom");
$LastNameField.setAttribute("required", "");
$LastNameField.className = "form-control col-3";
$rowFields1.appendChild($LastNameField);

//div col-1 espace entre 2 champs
$rowFields1.appendChild($space1 = document.createElement('div')).className = "col-1";

//label prénom 
const $firstName = document.createElement('label');
$firstName.setAttribute("for", "first-name")
$firstName.className = "col-2 text-left";
$firstName.innerText = "Prénom";
$rowFields1.appendChild($firstName);

//input prénom
const $firstNameField = document.createElement('input');
$firstNameField.setAttribute("type", "text");
$firstNameField.setAttribute("id", "first-name"), ("name", "prénom");
$firstNameField.setAttribute("required", "");
$firstNameField.className = "form-control col-3";
$rowFields1.appendChild($firstNameField);

//Fin 1ere ligne de champ----------------------------------------------


//2eme ligne de champ----------------------------------------------
const $rowFields2 = document.createElement('div');
$rowFields2.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields2);

//label adresse 
const $address = document.createElement('label');
$address.setAttribute("for", "adress")
$address.className = "col-2 text-left";
$address.innerText = "Adresse";
$rowFields2.appendChild($address);

//input adresse
const $addressField = document.createElement('input');
$addressField.setAttribute("type", "text");
$addressField.setAttribute("id", "adress"), ("name", "adresse");
$addressField.setAttribute("required", "");
$addressField.className = "form-control col-3";
$rowFields2.appendChild($addressField);

//div col-1 espace entre 2 champs
$rowFields2.appendChild($space2 = document.createElement('div')).className = "col-1";

//label code postal 
const $postalCode = document.createElement('label');
$postalCode.setAttribute("for", "postal-code")
$postalCode.className = "col-2 text-left";
$postalCode.innerText = "Code postal";
$rowFields2.appendChild($postalCode);

//input code postal 
const $postalCodeField = document.createElement('input');
$postalCodeField.setAttribute("type", "text");
$postalCodeField.setAttribute("id", "postal-code"), ("name", "code-postal");
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
$cityField.setAttribute("type", "text");
$cityField.setAttribute("id", "city"), ("name", "ville");
$cityField.setAttribute("required", "");
$cityField.className = "form-control col-3";
$rowFields3.appendChild($cityField);

//div col-1 espace entre 2 champs
$rowFields3.appendChild($space3 = document.createElement('div')).className = "col-1";


//label téléphone
const $phone = document.createElement('label');
$phone.setAttribute("for", "phone")
$phone.className = "col-2 text-left";
$phone.innerText = "Télephone";
$rowFields3.appendChild($phone);

//input téléphone  
const $phoneField = document.createElement('input');
$phoneField.setAttribute("type", "tel");
$phoneField.setAttribute("id", "phone"), ("name", "téléphone");
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
$email.setAttribute("pattern", "/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/");
$email.className = "col-2 text-left";
$email.innerText = "Email";
$rowFields4.appendChild($email);

//input email
const $emailField = document.createElement('input');
$emailField.setAttribute("type", "email");
$emailField.setAttribute("id", "email"), ("name", "email");
$emailField.setAttribute("required", "");
$emailField.className = "form-control col-3";
$rowFields4.appendChild($emailField);

//div col-1 espace entre 2 champs
$rowFields4.appendChild($space4 = document.createElement('div')).className = "col-1";

//label mot de passe
const $password = document.createElement('label');
$password.setAttribute("for", "password")
$password.className = "col-2 text-left";
$password.innerText = "Mot de passe";
$rowFields4.appendChild($password);

//input mot de passe  
const $passwordField = document.createElement('input');
$passwordField.setAttribute("type", "password");
$passwordField.setAttribute("id", "password"), ("name", "mot-de-passe");
$passwordField.setAttribute("required", "");
$passwordField.setAttribute("maxlength", "8");
$passwordField.setAttribute("placeholder", "8 caractères");
$passwordField.className = "form-control col-3";
$rowFields4.appendChild($passwordField);

//Fin 4eme ligne de champ----------------------------------------------

//Focus sur le 1er champ à remplir
$LastNameField.focus();

//Saut de ligne
$form.appendChild($lineBreak2 = document.createElement('br'));

//Bouton de validation de commande --------------------------------
const $validationButton = document.createElement('button');
$validationButton.className = "btn btn-info";
$validationButton.setAttribute("type", "submit");
$validationButton.innerText = "Valider votre commande";
$form.appendChild($validationButton);



//Sauvegarder le formulaire de commande ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    [$LastNameField, $firstNameField, $addressField, $cityField, $emailField].forEach(function (field) {
        if (field.value.trim().length < 1) {
            alert("Tous les champs du formulaire doivent être correctement remplis");
            return;
        }
    });

    function getOrdersId() {
        const ids = [];
        storage.orders.forEach(order => {
            for (let i = 0; i < order.quantity; i++) {
                ids.push(order._id);
            }
        });
        return ids;
    }

    window.location.href = "confirmation-commande.html";

    //Envoi du formulaire de commande au serveur ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:3000/api/teddies/order");
    req.setRequestHeader("Content-Type", "application/json");

    const data = {
        contact: {
            firstName: $firstNameField.value,
            lastName: $LastNameField.value,
            address: $addressField.value,
            city: $cityField.value,
            email: $emailField.value
        },
        products: getOrdersId()
    };

    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 201) {
                console.log(JSON.parse(this.responseText));
            } else {
                console.log("Statut : " + this.status);
            }
        }
    }
    req.send(JSON.stringify(data));
    
    //récupérer l'ID de la commande
    for (orderId in obj) {
        console.log(orderId);
    }
    localStorage.setItem("orderId", Object.values(orderId));
});








