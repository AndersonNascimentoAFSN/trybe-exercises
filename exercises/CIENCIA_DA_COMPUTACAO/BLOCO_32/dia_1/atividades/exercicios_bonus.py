# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.
list_numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def smallestNumber(numbers):
    number_smallest = numbers[0]

    for number in numbers:
        if number < number_smallest:
            number_smallest = number
    return number_smallest


print(smallestNumber(list_numbers))

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:


def asterisk_pyramid(number, n=1):
    while n <= number:
        print("*" * n)
        n += 1


asterisk_pyramid(5)

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N . Por exemplo, para N = 5,
# o valor esperado será 15.


def sum(number, start=1, step=1, total=0):
    for index in range(start, number + 1, step):
        total += index
    return total


print(sum(300, 3, 3))
print(sum(5))


def ArithmeticProgression(number, num=1, solution=0):
    if number > 100:
        number = 100
    solution = num * (number * (number + 1)) / 2
    return solution


print(ArithmeticProgression(5))
print(ArithmeticProgression(300, 3))

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:
# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do
# litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


