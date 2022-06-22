const revelar = document.querySelector("#revelar")
const senha = document.querySelector("#senha")

function revelarSenha(){

    const tipo = senha.getAttribute('type')
    if(tipo == "password"){
        senha.setAttribute('type','text')
    }
    
    else{
        senha.setAttribute('type','password')
    }
    revelar.classList.toggle('bi-eye')

}
revelar.onclick = revelarSenha
