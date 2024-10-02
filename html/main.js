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
            new User('João Silva', 'joao@example.com', '123456'),
            new User('Maria Souza', 'maria@example.com', 'abcdef'),
            new User('Carlos Santos', 'carlos@example.com', 'senha123')
        ];  // Inicializa o array de usuários cadastrados
    }

    // Método para cadastrar um novo usuário
    registerUser(name, email, password, confirmPassword) {
        // Verifica se o email já está registrado
        if (this.isEmailRegistered(email)) {
            this.showError('Este e-mail já está cadastrado.');
            return false;
        }

        // Verifica se as senhas coincidem
        if (!this.validatePassword(password, confirmPassword)) {
            this.showError('As senhas não coincidem.');
            return false;
        }

        // Cria um novo usuário e adiciona ao array
        const newUser = new User(name, email, password);
        this.users.push(newUser);
        return true;  // Retorna true se o cadastro for bem-sucedido
    }

    // Método para autenticar o usuário
    loginUser(email, password) {
        const user = this.users.find(user => user.email === email);

        // Verifica se o e-mail está registrado e se a senha está correta
        if (user && user.password === password) {
            return true;  // Login bem-sucedido
        } else {
            this.showError('Email ou senha inválidos.');
            return false;
        }
    }

    // Método para verificar se o e-mail já está registrado
    isEmailRegistered(email) {
        return this.users.some(user => user.email === email);
    }

    // Método para validar se as senhas coincidem
    validatePassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Método para exibir mensagens de erro
    showError(message) {
        // Aqui você pode customizar como exibir o erro no formulário
        console.error(message);
    }
}

// Exemplo de uso:
const auth = new Auth();
