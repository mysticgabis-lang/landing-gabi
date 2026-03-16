document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault()

const a = document.getElementById("campoA").value
const b = document.getElementById("campoB").value
const c = document.getElementById("campoC").value
const d = document.getElementById("campoD").value

const url = "https://docs.google.com/forms/d/e/1FAIpQLSeZfnJ4gyvi5CPQEfFjYHHbekOZWlDZa6Gs1Hxk4YhbXwflyg/formResponse"

const data = new FormData()

data.append("entry.37116043", a)
data.append("entry.1502729251", b)
data.append("entry.1816277901", c)
data.append("entry.2072811760", d)

fetch(url,{
method:"POST",
mode:"no-cors",
body:data
})

document.getElementById("msg").innerText="Enviado com sucesso!"

document.getElementById("form").reset()

})
