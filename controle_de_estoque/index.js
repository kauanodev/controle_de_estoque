//logar
//Castrar item de acordo com a categoria
///Impressoras são cadastradas com numero de etiqueta, modelo e setor
///Salva no banco de dados



function login(){
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    console.log(email)
    if(email == "victorkauanx@gmail.com" && senha == "1234"){
        console.log("deu bom")
        window.location.href = "page2.html";
    }
    else{
        window.alert("Escreve certo man!");
    }
}


const button = document.getElementById("logar")
button.addEventListener("click", () =>{
    login()
});






