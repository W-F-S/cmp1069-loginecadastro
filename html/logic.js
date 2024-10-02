



let loginButton = document.querySelector('.js-login');
let signUpButton = document.querySelector('.js-signUp');

let inputEmailLogin = document.querySelector('#email-login');
let inputPasswordLogin = document.querySelector('#password-login');

loginButton.addEventListener('click', ((e) =>{
    console.log('botao login click');

    if(!inputEmailLogin || !inputPasswordLogin){
        alert("Preencha todos os campos para login");
    }
}));

signUpButton.addEventListener('click', ((e) =>{
    console.log('botao signUp click');
}))

