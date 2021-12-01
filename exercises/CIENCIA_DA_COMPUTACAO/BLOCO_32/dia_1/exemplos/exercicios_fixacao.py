#  Exercício 1: No terminal, inicialize duas variáveis a e b,
# sendo a = 10 e b = 5. Mostre o resultado das 7
# operações básicas (soma, subtração, multiplicação, divisão, divisão inteira,
# potenciação e módulo) envolvendo essas variáveis.
a, b = 10, 5

print("Soma:", a + b)
print("Subtração:", a - b)
print("Multiplicação:", a * b)
print("Divisão:", a / b)
print("Divisão inteira:", a // b)
print("Potenciação:", a ** b)
print("Módulo:", a % b)

# Exercício 2: Declare e inicialize uma variável: hours = 6. Quantos minutos
# têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes
# e seconds que recebem os respectivos resultados das contas. Depois, imprima
# cada uma delas.
hours = 6
minutesPerHours = 60
secondsPerHours = 60 * 60

minutes = hours * minutesPerHours
seconds = hours * secondsPerHours

print("Minutos em 6 horas:", minutes)
print("Segundos em 6 horas:", seconds)

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto
# e vírgula no final de uma instrução em Python.
# R = Não acontece nada;


# Exercício 4: Suponha que o preço de capa de um livro seja 24,20, mas as
# livrarias recebem um desconto de 40%. O transporte custa 3,00 para o
# primeiro exemplar e 75 centavos para cada exemplar adicional.
# Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que
# receba o custo total e a imprima.
totalBookUnit = 24.20
qtyOfBooks = 60
firstTransport = 3.00
transport = 0.75
taxaDescont = 0.4
totalDescont = totalBookUnit * qtyOfBooks * taxaDescont
totalTransport = firstTransport + (qtyOfBooks - 1 * transport)

totalCost = (totalBookUnit * qtyOfBooks) + totalTransport - totalDescont
print("Total cost:", totalCost)


trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append("Ciência da Computação")
print(trybe_course)

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0] = "Fundamentos"
print(trybe_course)


# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se
# também o método set() . Inicialize uma variável com essa função var = set()
# e adicione seu nome ao conjunto utilizando um dos métodos vistos acima.
# Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

user = set()
user.add("Anderson")
print(user, type(user))


# Em JavaScript, não precisávamos colocar a chave do objeto entre aspas, porém,
# em Python, isso é necessário.
# Utilizando o código abaixo, faça os exercícios de fixação 8, 9 e 10:
info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: O que acontecerá se você tentar acessar o valor da chave
# "personagem" como fazíamos em JavaScript, utilizando object.key?
print(info["personagem"])
keys = info.keys()
print(keys)

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave
# "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info["recorrente"] = "Sim"
print(info)

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto
# no console.
del info["origem"]
print(info)

# Exercício 11: Após uma consulta do banco de dados, temos linhas que contém
# nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista
# anteriormente seria recomendada dado que após esta consulta somente exibimos
# estes valores.
user = ("Thyago", "Nobre", 29)
print(user, type(user))

# Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece em
# uma sequência é uma técnica muito útil na solução de alguns problemas. Qual
# é a estrutura mais recomendada para o armazenamento desta contagem?
count = {"a": 2}
print(count, type(count))
