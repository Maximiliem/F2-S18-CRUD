document.addEventListener("DOMContentLoaded", function(){
const btnGet1 = document.getElementById('btnGet1');
const btnPost = document.getElementById('btnPost');
const btnPut = document.getElementById('btnPut');
const btnDelete = document.getElementById('btnDelete');
const table = document.getElementById('results');

function refreshTable() {
    while (table.firstChild) {
        table.firstChild.remove();
    }
    fetch('https://65417e1af0b8287df1fe68c1.mockapi.io/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const row = table.insertRow();
                row.insertCell().textContent = user.id;
                row.insertCell().textContent = user.nombre;
                row.insertCell().textContent = user.apellido;
            });
        })
        .catch(error => console.log('Error:', error));
}

function crudFunction(method, data = {}, id = "") {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://65417e1af0b8287df1fe68c1.mockapi.io/users/" + id, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            refreshTable();
        })
        .catch(error => console.log('error', error));
}

btnGet1.addEventListener('click', function () {
    const id = document.getElementById('inputGet1Id').value;
    crudFunction("GET", {}, id);
});

btnPost.addEventListener('click', function () {
    const nombre = document.getElementById('inputPostNombre').value;
    const apellido = document.getElementById('inputPostApellido').value;
    /* const data = { nombre, apellido };
    crudFunction("POST", data); */
    if (nombre && apellido) {
        const listaItem = document.createElement('li');
        listaItem.textContent = `Nombre: ${nombre}, Apellido: ${apellido}`;

        table.appendChild(listaItem);
        inputNombre.value = '';
        inputApellido.value = '';
    }
});

btnPut.addEventListener('click', function () {
    const id = document.getElementById('inputPutId').value;
    const nombre = document.getElementById('inputPutNombre').value;
    const apellido = document.getElementById('inputPutApellido').value;
    const data = { nombre, apellido };
    crudFunction("PUT", data, id);
})

btnDelete.addEventListener('click', function () {
    const id = document.getElementById('inputDelete').value;
    crudFunction("DELETE", {}, id);
});
});