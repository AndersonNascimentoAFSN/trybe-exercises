def imc (peso, altura):
    return peso / (altura  ** 2)

print(imc(62, 1.68)) # passagem de parâmetros forma "posicional"
# print(imc(peso=62, altura=1.68)) # passagem de parâmetros forma "nomeada"

def soma(x, y):
    return x + y

print(soma(2, 2));

# Os parâmetros também podem ser variádicos. Ou seja, podem variar em sua quantidade. Parâmetros posicionais variádicos são acessados como tuplas no interior de uma função e parâmetros nomeados variádicos como dicionário.

def concat(*strings):
    string_final = ''

    for string in strings:
        string_final += string
        if not string == strings[-1]:
            string_final += ', '
    return string_final

print(concat("Anderson", "Felipe"))

# dict é uma função que já vem embutida no python
dict(nome="Felipe", sobrenome="Silva", idade=25)  # cria um dicionário utilizando as chaves passadas

dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)  # o número de parâmetros passados para a função pode variar

len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

# Escopo de função

