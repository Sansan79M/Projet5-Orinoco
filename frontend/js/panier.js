//Récupération des infos produits via le localStorage
const storage = JSON.parse(localStorage.getItem("product_value_teddies"));


//Récupération de l'élément parent de panier.html    
const $command = document.querySelector('#command'); //Corps de la page : Main


//div container1 : LOGO et TITRE ---------------------------------------------------------------
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

//Fin Container1 : LOGO et TITRE ------------------------------------------------------------------------------------------


//Div container2 : PANIER ------------------------------------------------------------------------------
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

//1ere ligne d'entête du tableau <tr>¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
function setTableHeader() {

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


//Lignes des produits commandés <tr>¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
let totalQuantity = 0; //nombre total d'articles
let totalOrder = 0; //montant total de la commande

function setTableBody() {

    for (let i = 0; i < storage.orders.length; i++) {
        const product = storage.orders[i];

        //Calcul : nombre d'article X prix unitaire = prix total par ligne
        const subtotal = (product.price / 100) * product.quantity;

        //Calcul le nombre total d'articles, à chaque ajout d'une ligne produit
        totalQuantity += parseInt(product.quantity);


        //Calcul le montant total de la commande à chaque ajout d'une ligne produit
        totalOrder += subtotal;


        //Lignes produits
        const $tr = document.createElement('tr');
        $table.appendChild($tr);

        //Ligne produit rempli avec les éléments de chaque article
        $tr.innerHTML +=
            `<td><img src="${product.imageUrl}"></td>
         <td>${product._id}</td>
         <td>${product.name}</td>
         <td>${product.color}</td>
         <td>${product.quantity}</td>
         <td>${product.price / 100} euros</td>
         <td>${subtotal} euros</td>`

        //Corbeille de suppression de ligne produit
        const $trash = document.createElement('td');
        $trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
        $tr.appendChild($trash);



        //Suppression d'une ligne article
        $trash.addEventListener('click', () => {

            if (confirm("Voulez-vous vraiment supprimer l'article ?")) {

                const index = storage.orders.findIndex(element => element._id === product._id && element.color === product.color);
                storage.orders.splice(index, 1); //supprime l'article choisi de l'index
                $table.removeChild($tr); //supprime la ligne produit choisie

                //Récupération des constantes du setTableFooter, par leur id html
                const $numberProducts = document.querySelector("#numberProducts");
                const $totalAmount = document.querySelector("#totalAmount");

                totalQuantity -= parseInt(product.quantity); //refait le total du nombre d'articles
                console.log(totalQuantity); //vérification du nombre 
                $numberProducts.innerText = `${totalQuantity}`; //affiche le nouveau nombre total d'articles

                totalOrder -= subtotal; //refait le total du montant de la commande
                console.log(totalOrder);//vérification du montant
                $totalAmount.innerText = `${totalOrder} euros`; //affiche le nouveau montant total de la commande

                //setTableFooter(totalOrder,totalQuantity);
                localStorage.setItem("product_value_teddies", JSON.stringify(storage)); //Ré-enregistre le localStorage


                 //S'il n'y a plus de ligne produit, suppression du formulaire et affiche que le panier est vide
                while (totalQuantity === 0 && totalOrder === 0) {
                //deleteCartAndForm();
                $title.innerHTML = "<br>Votre panier est vide !<br><br>";//modification du titre
            $title.style.fontSize = "30px";//fontSize du titre
            $title.style.color = "red";//couleur du titre

            }
            }
           
        });


    }

}

//Dernière ligne du tableau <tr>¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤

function setTableFooter(totalOrder, totalQuantity) {

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
    $numberProducts.id = "numberProducts";
    $numberProducts.innerText = `${totalQuantity}`;
    $tr3.appendChild($numberProducts);

    //Champ vide entre le nombre et le montant
    $tr3.appendChild($emptyFields = document.createElement('td'));

    //Montant de la commande
    const $totalAmount = document.createElement('td');
    $totalAmount.className = "font-weight-bold";
    $totalAmount.id = "totalAmount";
    $totalAmount.innerText = `${totalOrder} euros`;
    $tr3.appendChild($totalAmount);

}

//On appelle les 3 fonctions du tableau

setTableHeader();
setTableBody();
setTableFooter(totalOrder, totalQuantity);

//FIN DU TABLEAU PANIER-----------------------------------------

//Saut de ligne
$container2.appendChild($lineBreak1 = document.createElement('br'));

//Bouton pour continuer les achats
const $continuePurchaseButton = document.createElement('a');
$continuePurchaseButton.className = "btn btn-info";
$continuePurchaseButton.id = "continue";
$continuePurchaseButton.setAttribute("type", "button")
$continuePurchaseButton.setAttribute("aria-label", "Bouton retour vers la page d'accueil");
$continuePurchaseButton.setAttribute("href", "index.html");
$continuePurchaseButton.innerText = "Continuer mes achats";
$container2.appendChild($continuePurchaseButton);

//Bouton suppression panier
const $deleteCartButton = document.createElement('button');
$deleteCartButton.className = "btn btn-info";
$deleteCartButton.id = "stop";
$deleteCartButton.setAttribute("type", "button")
$deleteCartButton.setAttribute("aria-label", "Bouton suppression du panier");
$deleteCartButton.innerText = "Supprimer le panier";
$container2.appendChild($deleteCartButton);


//Demande de confirmation de suppression du panier
$deleteCartButton.addEventListener('click', () => {
    if (confirm('Voulez-vous vraiment supprimer le panier ?')) {

        var deleteCartAndForm = () => {
            $title.innerHTML = "<br>Votre panier est vide !<br><br>";//modification du titre
            $title.style.fontSize = "30px";//fontSize du titre
            $title.style.color = "red";//couleur du titre

            $table.innerHTML = ""; //suppression complète de la table
            setTableHeader(); //afficher le header du panier
            setTableFooter(0, 0); //afficher le footer du panier avec un montant et un total produit à 0 euros

            storage.orders = []; //suppression du n° de commande

            localStorage.setItem("product_value_teddies", JSON.stringify(storage));//suppression du localStorage

            $continuePurchaseButton.style.display = "none"; //suppression du bouton retour à l'accueil
            $deleteCartButton.style.display = "none"; //suppression du bouton suppression panier

            $h2.innerHTML = ""; //suppression du h2
            $form.innerHTML = `<a aria-label="Lien vers la page d'accueil" href="index.html">
            Cliquez ici pour retourner sur la page d'accueil.</a>`; //remplacement du formulaire par un message de retour à l'accueil
            $form.style.fontSize = "30px";//fontSize du nouveau <a>
        }
        deleteCartAndForm();
    }
});



//Fin Container2 : PANIER -------------------------------------------------------------------------------------------


//Div container3 : FORMULAIRE ---------------------------------------------------------------------------
const $container3 = document.createElement('div');
$container3.className = "container";
$container3.setAttribute("id", "container3")
$command.appendChild($container3);

//Titre du formulaire h2
const $h2 = document.createElement('h2');
$h2.innerText = "Veuillez compléter le formulaire pour valider votre commande.\n\n";
$container3.appendChild($h2);

//Formulaire************************************************************************************
$container3.appendChild($form = document.createElement('form'));

//CIVILITE ---------------------------------------------------------------------------------------------
const $civility = document.createElement('div');
$civility.className = "form-group row justify-content-center align-items-center ";
$civility.innerText = "Civilité *  :  ";
$form.appendChild($civility);

//div col-1 : espace entre 2 champs
$civility.appendChild($space6 = document.createElement('div')).className = "col-sm-1";

//Civilité Madame
const $genderWoman = document.createElement('div');
$genderWoman.className = "custom-control custom-radio custom-control-inline"
$civility.appendChild($genderWoman);

const $genderWomanInput = document.createElement("input");
$genderWomanInput.className = "custom-control-input";
$genderWomanInput.setAttribute("type", "radio");
$genderWomanInput.setAttribute("id", "woman");
$genderWomanInput.setAttribute("name", "civilite");
$genderWomanInput.setAttribute("value", "Madame");
$genderWomanInput.setAttribute("required", "");
$genderWoman.appendChild($genderWomanInput);

const $genderWomanLabel = document.createElement("label");
$genderWomanLabel.className = "custom-control-label";
$genderWomanLabel.setAttribute("for", "woman");
$genderWomanLabel.innerText = "Madame";
$genderWoman.appendChild($genderWomanLabel);

//div col-1 : espace entre 2 champs
$civility.appendChild($space5 = document.createElement('div')).className = "col-sm-1";

//Civilité Monsieur
const $genderMan = document.createElement('div');
$genderMan.className = "custom-control custom-radio custom-control-inline"
$civility.appendChild($genderMan);

const $genderManInput = document.createElement("input");
$genderManInput.className = "custom-control-input";
$genderManInput.setAttribute("type", "radio");
$genderManInput.setAttribute("id", "man");
$genderManInput.setAttribute("name", "civilite");
$genderManInput.setAttribute("value", "Monsieur");
$genderManInput.setAttribute("required", "");
$genderMan.appendChild($genderManInput);

const $genderManLabel = document.createElement("label");
$genderManLabel.className = "custom-control-label";
$genderManLabel.setAttribute("for", "man");
$genderManLabel.innerText = "Monsieur";
$genderMan.appendChild($genderManLabel);




//Fin civilité----------------------------------------------------------------------------------


//1ere ligne de champ-------------------------------------------------------------------------
const $rowFields1 = document.createElement('div');
$rowFields1.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields1);

//label nom 
const $lastName = document.createElement('label');
$lastName.setAttribute("for", "name")
$lastName.className = "col-sm-2 text-left";
$lastName.innerText = "Nom *";
$rowFields1.appendChild($lastName);

//input nom
const $LastNameField = document.createElement('input');
$LastNameField.setAttribute("type", "text");
$LastNameField.setAttribute("id", "name");
$LastNameField.setAttribute("name", "nom");
$LastNameField.setAttribute("required", "");
$LastNameField.className = "form-control col-8 col-sm-3";
$rowFields1.appendChild($LastNameField);

//div col-1 : espace entre 2 champs
$rowFields1.appendChild($space1 = document.createElement('div')).className = "col-sm-1";

//label prénom 
const $firstName = document.createElement('label');
$firstName.setAttribute("for", "first-name")
$firstName.className = "col-sm-2 text-left";
$firstName.innerText = "Prénom *";
$rowFields1.appendChild($firstName);

//input prénom
const $firstNameField = document.createElement('input');
$firstNameField.setAttribute("type", "text");
$firstNameField.setAttribute("id", "first-name");
$firstNameField.setAttribute("name", "prenom");
$firstNameField.setAttribute("required", "");
$firstNameField.className = "form-control col-8 col-sm-3";
$rowFields1.appendChild($firstNameField);

//Fin 1ere ligne de champ -------------------------------------------------------------------------


//2eme ligne de champ -----------------------------------------------------------------------------
const $rowFields2 = document.createElement('div');
$rowFields2.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields2);

//label adresse 
const $address = document.createElement('label');
$address.setAttribute("for", "adress")
$address.className = "col-sm-2 text-left";
$address.innerText = "Adresse *";
$rowFields2.appendChild($address);

//input adresse
const $addressField = document.createElement('input');
$addressField.setAttribute("type", "text");
$addressField.setAttribute("id", "adress");
$addressField.setAttribute("name", "adresse");
$addressField.setAttribute("required", "");
$addressField.className = "form-control col-8 col-sm-3";
$rowFields2.appendChild($addressField);

//div col-1 : espace entre 2 champs
$rowFields2.appendChild($space2 = document.createElement('div')).className = "col-sm-1";

//label code postal 
const $postalCode = document.createElement('label');
$postalCode.setAttribute("for", "postal-code")
$postalCode.className = "col-sm-2 text-left";
$postalCode.innerText = "Code postal *";
$rowFields2.appendChild($postalCode);

//input code postal 
const $postalCodeField = document.createElement('input');
$postalCodeField.setAttribute("type", "text");
$postalCodeField.setAttribute("id", "postal-code");
$postalCodeField.setAttribute("name", "code-postal");
$postalCodeField.setAttribute("required", "");
$postalCodeField.setAttribute("maxlength", "5");
$postalCodeField.setAttribute("pattern", "[0-9]{5}");
$postalCodeField.className = "form-control col-8 col-sm-3";
$rowFields2.appendChild($postalCodeField);

//Fin 2eme ligne de champ -----------------------------------------------------------------------------


//3eme ligne de champ ---------------------------------------------------------------------------------
const $rowFields3 = document.createElement('div');
$rowFields3.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields3);

//label ville 
const $city = document.createElement('label');
$city.setAttribute("for", "city")
$city.className = "col-sm-2 text-left";
$city.innerText = "Ville *";
$rowFields3.appendChild($city);

//input ville 
const $cityField = document.createElement('input');
$cityField.setAttribute("type", "text");
$cityField.setAttribute("id", "city");
$cityField.setAttribute("name", "ville");
$cityField.setAttribute("required", "");
$cityField.className = "form-control col-8 col-sm-3";
$rowFields3.appendChild($cityField);

//div col-1 : espace entre 2 champs
$rowFields3.appendChild($space3 = document.createElement('div')).className = "col-sm-1";

//label téléphone
const $phone = document.createElement('label');
$phone.setAttribute("for", "phone")
$phone.className = "col-sm-2 text-left";
$phone.innerText = "Télephone *";
$rowFields3.appendChild($phone);

//input téléphone  
const $phoneField = document.createElement('input');
$phoneField.setAttribute("type", "tel");
$phoneField.setAttribute("id", "phone");
$phoneField.setAttribute("name", "téléphone");
$phoneField.setAttribute("required", "");
$phoneField.setAttribute("maxlength", "10");
$phoneField.setAttribute("pattern", "0[1-9][0-9]{8}");
$phoneField.className = "form-control col-8 col-sm-3";
$rowFields3.appendChild($phoneField);

//Fin 3eme ligne de champ -----------------------------------------------------------------------------


//4eme ligne de champ ------------------------------------------------------------------------------------
const $rowFields4 = document.createElement('div');
$rowFields4.className = "form-group row justify-content-center align-items-center"
$form.appendChild($rowFields4);

//label email
const $email = document.createElement('label');
$email.setAttribute("for", "email")
$email.className = "col-sm-2 text-left";
$email.innerText = "Email *";
$rowFields4.appendChild($email);

//input email
const $emailField = document.createElement('input');
$emailField.setAttribute("type", "email");
$emailField.setAttribute("id", "email");
$emailField.setAttribute("name", "email");
$emailField.setAttribute("required", "");
$emailField.setAttribute("pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$");
$emailField.className = "form-control col-8 col-sm-3";
$rowFields4.appendChild($emailField);

//div col-1 : espace entre 2 champs
$rowFields4.appendChild($space4 = document.createElement('div')).className = "col-sm-1";

//label mot de passe
const $password = document.createElement('label');
$password.setAttribute("for", "password")
$password.className = "col-sm-2 text-left";
$password.innerText = "Mot de passe *";
$rowFields4.appendChild($password);

//input mot de passe  
const $passwordField = document.createElement('input');
$passwordField.setAttribute("type", "password");
$passwordField.setAttribute("id", "password");
$passwordField.setAttribute("name", "mot-de-passe");
$passwordField.setAttribute("required", "");
$passwordField.setAttribute("maxlength", "8");
$passwordField.setAttribute("minlength", "8");
$passwordField.setAttribute("placeholder", "8 caractères");
$passwordField.className = "form-control col-8 col-sm-3";
$rowFields4.appendChild($passwordField);

//Fin 4eme ligne de champ -----------------------------------------------------------------------------------

//Focus sur le 1er champ à remplir
$genderWomanInput.focus();

//Saut de ligne
$form.appendChild($lineBreak2 = document.createElement('br'));

//Bouton de validation de commande --------------------------------
const $validationButton = document.createElement('button');
$validationButton.className = "btn btn-info";
$validationButton.setAttribute("type", "submit");
$validationButton.innerText = "Valider votre commande";
$form.appendChild($validationButton);

//Fin container3 : FORMULAIRE ---------------------------------------------------------------------------

//Sauvegarder le formulaire de commande ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤
$form.addEventListener('submit', (e) => {
    e.preventDefault();

    //Vérifie que tout le formulaire est bien rempli correctement
    [$LastNameField, $firstNameField, $addressField, $cityField, $emailField].forEach(function (field) {
        if (field.value.trim().length < 1) {
            alert("Tous les champs du formulaire doivent être correctement remplis");
            return;
        }
    });

    //Récupére les ID des articles commandés et les stockent pour envoi au serveur
    function getOrdersId() {
        const ids = [];
        storage.orders.forEach(order => {
            for (let i = 0; i < order.quantity; i++) {
                ids.push(order._id);
            }
        });
        return ids;
    }

    //Création d'une nouvelle commande à transmettre au serveur 
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

    //Vérifie que l'envoi au serveur fonctionne
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 201) {
                console.log(JSON.parse(this.responseText));

                //Récupération du numéro de commande et le stocker en local pour la confirmation
                console.log(JSON.parse(this.responseText).orderId);
                localStorage.setItem("orderId", JSON.parse(this.responseText).orderId);
                window.location.href = "confirmation-commande.html";
            } else {
                console.log("Statut : " + this.status);
            }
        }
    }
    //Envoi au serveur les éléments du formulaire et les ID des articles commandés
    req.send(JSON.stringify(data));

    //Stocker en local le montant de la commande pour la confirmation
    const $totalAmount = document.querySelector("#totalAmount");
    localStorage.setItem("basket-amount", $totalAmount.innerText);

});






