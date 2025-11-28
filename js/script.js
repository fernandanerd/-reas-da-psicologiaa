function validarForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    if (username === "" || email === "" || senha === "") {
        alert('Preencha todos os campos!');
    } else {
        erro.textContent = ""; // limpa erro
        window.location.href = "index.html"; 
    }
}
