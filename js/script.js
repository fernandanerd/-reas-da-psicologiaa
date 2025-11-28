function validarForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    // Usuário e senha definidos
    let usuarioCorreto = "admin";
    let emailCorreto = "admin@gmail.com";
    let senhaCorreta = "1234";

    if (username === "" || email === "" || senha === "") {
        erro.textContent = "Preencha todos os campos!";
        return;
    }

    if (username === usuarioCorreto && email === emailCorreto && senha === senhaCorreta) {
        erro.textContent = "";
        window.location.href = "index.html"; 
    } else {
        erro.textContent = "Usuário, email ou senha incorretos!";
    }
}
