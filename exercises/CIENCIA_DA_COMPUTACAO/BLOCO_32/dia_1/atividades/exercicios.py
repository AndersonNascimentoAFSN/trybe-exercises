# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
import math


def larger_number(number1, number2):
    if number1 > number2:
        return number1
    return number2


print(larger_number(30, 20))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
listNumbers = [6, 9, 8, 7]


def media(numbers, total=0):
    for number in numbers:
        total += number
    return total / len(numbers)


print(media(listNumbers))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1
# , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:


def asterisk_square(quantity, n=0):
    while n < quantity:
        print("*" * quantity)
        n += 1


asterisk_square(5)


#  Exercício 4: Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres. Por exemplo,
# para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.
list_names = ["Anderson", "Bruno", "Yanni", "Thyago", "Celma"]


def larger_name(names, larger=""):
    for name in names:
        if len(name) > len(larger):
            larger = name
    return larger


print(larger_name(list_names))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em
# uma tupla contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede(em m²).


def quantityOfInk(wall_size, litter_for_meters=3):
    return wall_size / litter_for_meters


def quantityTin(wall_size, size_tin=18):
    if wall_size < size_tin:
        return 1
    return math.ceil((quantityOfInk(wall_size)) / size_tin)


def priceTotal(wall_size, coast_tin=80.00):
    return quantityTin(wall_size) * coast_tin


def formula(wall_size):
    return (quantityTin(wall_size), priceTotal(wall_size))


print(formula(60))


# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triângulo"
# , caso não seja possível formar um triângulo.


def typeOfTriangle(side_a=0, side_b=0, side_c=0):
    if (
        side_a < side_b + side_c
        and side_b < side_a + side_c
        and side_c < side_a + side_b
    ):
        if side_a == side_b == side_c:
            return "Equilátero"
        elif side_a == side_b or side_a == side_c or side_c == side_b:
            return "Isósceles"
        elif side_a != side_b != side_c:
            return "Escaleno"
    else:
        return "não é um triângulo"


print(typeOfTriangle(2, 2, 2))  # Equilátero
print(typeOfTriangle(3, 2, 2))  # Isósceles
print(typeOfTriangle(5, 6, 4))  # Escaleno
print(typeOfTriangle(2, 2))  # Não é um triângulo
print(typeOfTriangle(1, 2, 3))  # Não é um triângulo
