function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email: email, senha: senha })
    })
    .then(res => res.json())
    .then(data => {
        if (data.sucesso) {
            window.location.href = "/home"; 
        } else {
            document.getElementById("erro").style.display = "block";
        }
    });
}
