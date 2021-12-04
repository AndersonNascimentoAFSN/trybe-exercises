# Exercício 1: Faça um programa que solicite o nome de
# uma pessoa usuária e imprima-o na vertical. Exemplo:

name = input("Digite seu nome: ")


def name_vertital(name):
    for letter in name:
        print(letter)


if __name__ == "__main__":
    name_vertital(name)
