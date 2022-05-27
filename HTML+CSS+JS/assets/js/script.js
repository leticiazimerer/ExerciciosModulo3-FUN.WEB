/* 
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByNome()
por Classe: getElementsById()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Invalid Name"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Valid Name"
        txtNome.style.color = "green"
        let nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Invalid Email"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Valid Email"
        txtEmail.style.color = "green"
        let emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Very big text"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        let assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Form sent with scess!")
    } else {
        alert ("Fill the form correctly before send...")
    }

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.heigth = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.heigth = "200px"
}
}