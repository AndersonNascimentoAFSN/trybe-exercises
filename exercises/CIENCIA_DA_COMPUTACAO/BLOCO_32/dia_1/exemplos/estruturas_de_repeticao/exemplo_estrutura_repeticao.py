# Estruturas de repetição

pantheon_of_arton = [
    {"nome": "Wyanna", "domínio": "Magia"},
    {"nome": "Nimb", "domínio": "Sorte"},
    {"nome": "Ahadarak", "domínio": "Tormenta"},
]

domains = []

# for em Python

for god in pantheon_of_arton:
    domains.append(god["domínio"])

print(domains)

# compreensão de listas  / Compreencion em python:
# Isto é equivalente às operações de map e filter em JavaScript.
domains = [
    god["domínio"] for god in pantheon_of_arton if god["domínio"] != "Tormenta"
]

print(domains)

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0

for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)

# Compreensão de listas / Compreencion em python:
# Isto é equivalente às operações de map e filter em JavaScript.

filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]

print(filtered_restaurants)


filtered_restaurants_forRange = []

for index in range(len(restaurants)):
    if restaurants[index]["nota"] > min_rating:
        filtered_restaurants_forRange.append(restaurants[index])

print(filtered_restaurants_forRange)


#  Em alguns casos, ainda podemos querer percorrer uma sequência numérica,
# e para isto iteramos sobre a estrutura de dados range .
# for index in range(5):
#     print(index)

# while em Python

# A Sequência de Fibonacci, muito presente em diversas formas na natureza,
# é uma sequência numérica começando por 0 e 1 e cada termo subsequente
# corresponde à soma dos dois anteriores.
fibonacci = []
n = 10
last, next = 0, 1
while last < n:
    fibonacci.append(last)
    last, next = next, last + next

print(fibonacci)


#  Exercício 13: O Fatorial de um número inteiro é representado pela
# multiplicação de todos os números predecessores maiores que 0.
# Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5.
# Escreva um código que calcule o fatorial de um número inteiro.
factorial, number = 1, 5

for index in range(1, number + 1):
    factorial *= index
print(f"O fatorial de {number} é {factorial}")


# Exercício 14: Um sistema de avaliações registra valores de 0 a
# 0 para cada avaliação. Após algumas mudanças estes valores precisam ser
# ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações
# ratings = [6, 8, 5, 9, 10] . Escreva um código capaz de gerar as
# avaliações após a mudança. Neste caso o resultado deveria ser
# [60, 80, 50, 90, 100] .
ratings = [6, 8, 5, 9, 10]

# compreensão de listas
newValueRatingMulti = 10

ratings = [rating * newValueRatingMulti for rating in ratings]
print(ratings)

for index in range(len(ratings)):
    ratings[index] = ratings[index] * newValueRatingMulti
print(ratings)

for rating in ratings:
    position = ratings.index(rating)
    ratings[position] = ratings[position] * newValueRatingMulti
print(ratings)

# Experimente utilizar a sintaxe de compreensão de listas.
# Exercício 15: Percorra a lista do exercício 14 e imprima
# "Múltiplo de 3" se o elemento for divisível por 3.
ratings = [6, 8, 5, 9, 10]

ratings = [rating for rating in ratings if rating % 3 == 0]

print(f"Múltiplos de 3: {ratings}")
