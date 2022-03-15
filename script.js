//Coletar os campos do formulário
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmar-senha")


//Detectar o click no botão
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkUsername();
    checkEmail();
    checkSenha();
    checkSenhaConfere();
})


//Validar os campos
function checkUsername(){
    const usernameValue = username.value;

    if(usernameValue === ''){
        colocarErro(username, 'O nome de usuário é obrigatório')
    } else if(usernameValue.length<=4){
        colocarErro(username, 'O username deve ter 5 ou mais caracteres')
    } else if(usernameValue.length>=16){
        colocarErro(username, 'O username deve ter 15 ou menos caracteres')
    } else{
        colocarSucesso(username);
    }
}

function checkEmail(){
    const emailValue = email.value;

    if(emailValue === ''){
        colocarErro(email, 'O email é obrigatório')
    } else if(!validaEmail(emailValue)){
        colocarErro(email, 'Digite um email válido')
    } else(
        colocarSucesso(email)
    )
}

function checkSenha(){
    const senhaValue = senha.value;

    if(senhaValue === ''){
        colocarErro(senha, 'Digite uma senha')
    } else if(senhaValue<=6){
        colocarErro(senha, 'A senha deve ter 7 ou mais caracteres')
    } else if(senhaValue>=16){
        colocarErro(senha, 'A senha deve ter 15 ou menos caracteres')
    } else if(!validaSenha(senhaValue)){
        colocarErro(senha, 'A senha deve ter um caractere e um número')
    } else(
        colocarSucesso(senha)
    )
}

function checkSenhaConfere(){
    const confirmarSenhaValue = confirmarSenha.value;
    const senhaValue = senha.value;

    if(confirmarSenhaValue === senhaValue){
        colocarSucesso(confirmarSenha)
    } else(
        colocarErro(confirmarSenha, 'As senhas não conferem')
    )
}


//Colocar os erros
function colocarErro(input, mensagem){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = mensagem;
    formControl.className = 'form-control erro'
}

function colocarSucesso(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucesso';
}

function validaEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  function validaSenha(senha){
      return /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/.test(senha);
  }