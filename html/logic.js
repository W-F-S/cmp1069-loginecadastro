// Classe User
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// Classe Auth
class Auth {
    constructor() {
        this.users = [
            new User('João Silva', 'joao@email.com', '123456'),
            new User('Maria Souza', 'maria@email.com', 'abcdef'),
            new User('Carlos Santos', 'carlos@email.com', 'senha123'),
            new User('John User', 'user@email.com', '123'),
            new User('Admin', 'admin@email.com', '.')
        ];  // Inicializa o array de usuários cadastrados
    }

    // Método para cadastrar um novo usuário
    registerUser(name, email, password, confirmPassword) {
        // Verifica se o email já está registrado
        if (this.isEmailRegistered(email)) {
            return {result: false, error:'Este e-mail já está cadastrado.' };
        }

        // Verifica se as senhas coincidem
        if (!this.validatePassword(password, confirmPassword)) {
            this.showError('As senhas não coincidem.');
            return {result: false, error:'As senhas não coincidem.' };
        }

        // Cria um novo usuário e adiciona ao array
        const newUser = new User(name, email, password);
        this.users.push(newUser);
        return {result: true};  // Retorna true se o cadastro for bem-sucedido
    }

    // Método para autenticar o usuário
    loginUser(email, password) {
        const user = this.users.find(user => user.email === email);

        if (user && user.password === password) {
            return true;
        } else {
            console.log('Email ou senha inválidos.');
            return false;
        }
    }

    // Verifica se email está cadastrado
    isEmailRegistered(email) {
        return this.users.some(user => user.email === email);
    }

    // Método para validar se as senhas coincidem
    validatePassword(password, confirmPassword) {
        return password === confirmPassword;
    }
}



let authenticator = new Auth();
let loginButton = document.querySelector('.js-login');
let signUpButton = document.querySelector('.js-signUp');

let inputEmailLogin = document.querySelector('#email-login');
let inputPasswordLogin = document.querySelector('#password-login');


loginButton.addEventListener('click', ((e) =>{
    console.log('botao login click');

    if(!inputEmailLogin || !inputPasswordLogin){
        alert("Preencha todos os campos para login");
    }

    if(authenticator.loginUser(inputEmailLogin.value, inputPasswordLogin.value)){
        alert("Sucesso");
    }else{
        alert("Usuário não encontrado");
    }
}));

signUpButton.addEventListener('click', ((e) =>{
    console.log('botao signUp click');

    let inputNome = document.querySelector('#nome-cadastro').value;
    let inputEmail = document.querySelector('#email-cadastro').value;
    let inputSenha = document.querySelector('#senha-cadastro').value;
    let inputConfirmSenha = document.querySelector('#confirm-senha').value;

    let tmpCreateUser = authenticator.registerUser(inputNome, inputEmail, inputSenha, inputConfirmSenha);

    if(tmpCreateUser.result){
        alert("Usuario criado com sucesso");
    }else{
        alert(tmpCreateUser.error);
    }


}))
