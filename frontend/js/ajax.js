//Fonction de récupération de l'API avec une requête AJAX et la méthode GET
function ajaxGet(url) {

    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        xhr.send();

        xhr.addEventListener("load", function () {

            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.status);
            }
        });
        xhr.addEventListener("error", function (e) {
            reject(e);
        });
    });
}
