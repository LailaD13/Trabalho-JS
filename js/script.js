function logar(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === "cliente@fortes.com.br" && password === "1234") {
        window.location.href = "refeições.html";
    } else if (email === "fornecedor@fortes.com.br" && password === "4321") {
        window.location.href = "ndf.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
}