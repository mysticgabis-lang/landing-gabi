html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Landing da Gabi</title>
</head>

<body>

<h1>Landing da Gabi</h1>

<form>

<input type="text" placeholder="Nome" required>
<input type="email" placeholder="Email" required>

<button type="submit">Enviar</button>

</form>

</body>
</html>
"""

with open("index.html","w",encoding="utf-8") as f:
    f.write(html)

print("Landing criada!")
