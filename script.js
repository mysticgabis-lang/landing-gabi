document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("campoA").value;
    const email = document.getElementById("campoB").value;
    const telefone = document.getElementById("campoC").value;
    const mensagem = document.getElementById("campoD").value;

    const url = "https://docs.google.com/forms/d/e/1FAIpQLSeZfnJ4gyvi5CPQEfFjYHHbekOZWlDZa6Gs1Hxk4YhbXwflyg/formResponse";

    const data = new FormData();
    data.append("entry.37116043", nome);
    data.append("entry.1502729251", email);
    data.append("entry.1816277901", telefone);
    data.append("entry.2072811760", mensagem);

    fetch(url, { method: "POST", mode: "no-cors", body: data })
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("form").reset();
        });
});
