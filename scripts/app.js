const btnGet1 = document.getElementById('btnGet1');
const btnPost = document.getElementById('btnPost');
const btnPut = document.getElementById('btnPut');
const btnDelete = document.getElementById('btnDelete');
const table = document.getElementById('results');

fetch('https://65417e1af0b8287df1fe68c1.mockapi.io/users')
//hacer return del fetch para obtener el resultado de la promise

function refreshTable() {

};

function crudFunction(method, data = {}, id = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
        method: `${method}`,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://65417e1af0b8287df1fe68c1.mockapi.io/users/" + id, requestOptions)
        .then(response => response.JSON())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};

btnGet1.addEventListener('click', function () {
    const id = document.getElementById('inputGet1Id').value;
    crudFunction("GET");
});

btnPost.addEventListener('click', function () {
    const nombre = document.getElementById('inputPostNombre').value;
    const apellido = document.getElementById('inputPostApellido').value;
    crudFunction("POST");
});

btnPut.addEventListener('click', function () {
    const id = document.getElementById('inputPutId').value;
    const nombre = document.getElementById('inputPutNombre').value;
    const apellido = document.getElementById('inputPutApellido').value;
    crudFunction("PUT");
})

btnDelete.addEventListener('click', function () {
    const id = document.getElementById('inputDelete').value;
    crudFunction("DELETE");
});