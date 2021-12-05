# import sys

"""  Exercício 2: Escreva um programa que receba vários números naturais
e calcule a soma desses valores. Caso algum valor da entrada seja inválido,
por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros,
no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido".
Ao final, você deve imprimir a soma dos valores válidos.
🦜 Receba os valores em um mesmo input , solicitando à pessoa usuária que
separe-os com um espaço. Receba os valores no formato str e utilize o método
split para pegar cada valor separado. O método isdigit,
embutido no tipo str, pode ser utilizado para verificar se a
string corresponde a um número natural.  """


if __name__ == "__main__":

    # def sum_numbers(result=0, numbers=sys.argv):
    #     print("Digite os números, separando-os por espaço: ")
    #     for number in numbers:
    #         if number.isdigit():
    #             result += int(number)

    #     return result

    def sum_numbers(soma=0):
        list_numbers = input(
            "Digite os números, separando-os por espaço: "
        ).split(" ")

        for number in list_numbers:
            if not number.isdigit():
                return f"Erro ao somar valores, {number} é um valor inválido."
            soma += int(number)

        return soma


print("O resultado da soma é:", sum_numbers())
