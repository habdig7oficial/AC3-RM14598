document.addEventListener("DOMContentLoaded", function(event) {
    
    const senha = document.querySelector("#senha")
    const senha2 = document.querySelector("#senha2")
    let button = document.querySelector("#button")
    
    
    
    function comparar(){
        if(senha.value != senha2.value || senha.value == ""){
            senha2.setCustomValidity("A senha não confere")
            button.setAttribute("disabled", "disabled")
            return
        }else{
            senha2.setCustomValidity('')
            button.removeAttribute("disabled", "disabled")
            return
    
        }
    }
    
    senha.onchange = comparar
    senha2.onkeyup = comparar
    
  });



// document.addEventListener("DOMContentLoaded",function() {

//     let nome  = document.querySelector("#nome")
//     let email = document.querySelector("#email")

//     let senha = document.querySelector("#senha")
//     let senha_confirmar = document.querySelector("#senha_confirmar")


//     let reference = document.querySelector("#reference")
//     let buttom = document.querySelector("#button")

//     function verificar() {
//         if (senha.value != senha_confirmar.value) {

//             reference.innerHTML=""   

//             reference.innerHTML=" ❌"

//             /*senha_confirmar.setCustomValidity("A senha não confere")*/
//             /*console.log(`A senha não confere\n\n nome:${nome.value}\n email:${email.value}\n\n  senha1:${senha.value}\n senha2:${senha_confirmar.value} `)*/


//             buttom.classList.add("btn-lg")
            
//             buttom.setAttribute("disabled", "disabled")

//             return
//         }

//         else{

//             reference.innerHTML=""   

//             reference.innerHTML=" ✅"

//             /*senha_confirmar.setCustomValidity("")*/

//             /*console.log(`A senha confere\n\n nome:${nome.value}\n email:${email.value}\n\n  senha1:${senha.value}\n senha2:${senha_confirmar.value} `)*/
        

//             buttom.classList.remove("btn-lg")

//             buttom.removeAttribute("disabled", "disabled")
//         }

        
//         senha.onchange = verificar
    
//         senha_confirmar.onkeyup = verificar
//     }

//     verificar()





// })
