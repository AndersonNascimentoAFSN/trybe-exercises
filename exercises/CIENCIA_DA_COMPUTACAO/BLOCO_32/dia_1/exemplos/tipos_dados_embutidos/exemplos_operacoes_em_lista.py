fruits = ["orange", "apple", "grape", "pineapple"]

# operações em listas:
print(fruits[0])
# acessa o primeiro elemento da lista;
print(fruits[-1])
# acessa o último elemento da lista;

fruits.append("banana")
# adiciona a fruta banana ao final lista
print(fruits)

fruits.remove("pineapple")
# remove a fruta da lista
print(fruits)

fruits.extend(["pear", "melon", "kiwi"])
# acrescenta uma lista de frutas a lista original
print(fruits)

print(fruits.index("apple"))
# retorna o índice (posição) daquela fruta dentro da lista

fruits.sort()
# ordena a lista, modifica a lista original;
print(fruits)
