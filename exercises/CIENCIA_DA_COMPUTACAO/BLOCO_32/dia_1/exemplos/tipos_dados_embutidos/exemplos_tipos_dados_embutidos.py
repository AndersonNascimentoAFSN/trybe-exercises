# Tipos de dados embutidos

#  Números inteiros (int)
a = 5
print(type(a))

# Números fracionários (float)
a = 5.0
print(type(a))

# Números complexos (complex)
a = 5j
print(type(a))

# Strings (str)
a = "Anderson"
print(type(a))

# Booleanos (bool)
a = True
print(type(a))

# Listas (list) # elementos são definidos separados por vírgula,
# envolvidos por colchetes

fruits = ["orange", "apple", "grape", "pineapple"]
print(type(fruits))

# Tuplas (tuple) # elementos são definidos separados por vírgula,
# envolvidos por parenteses
user = ("Cássio", "Botaro", 42)
print(type(user))

# Conjuntos (set)
permissions = {
    "member",
    "group",
}  # elementos separados por vírgula, envolvidos por chaves
print(type(permissions))


# Conjuntos imutáveis (frozenset)
# Variação do set, porém imutável, ou seja, seus elementos não podem
# ser modificados durante a execução do programa.

permissions = frozenset(["member", "group"])

print(permissions.union({"user"}))
# novos conjuntos imutáveis podem ser criados à partir do original, mas
# o mesmo não pode ser modificado
print(permissions.intersection({"user", "member"}))
# retorna um conjunto resultante da intersecção dos conjuntos
print(permissions.difference({"user"}))
# retorna a diferença entre os dois conjuntos

# permissions.add('user'); # Error o conjunto é imutável.


# Dicionários (dict)
# Estrutura que associa uma chave a um determinado valor.
# É a representação do tão famoso objeto que utilizamos em JavaScript.

people_by_id = {
    1: "Cássio",
    2: "João",
    3: "Felipe",
}
# elementos no formato "chave: valor" separados por vírgula,envolvidos por
# chaves
print(type(people_by_id))

# Range (range)

# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um
# valor final, modificando seu valor de acordo com o passo (step) definido.
# Pode ser declarado como range( [start], stop[, step] ), em que start e step
# podem ser omitidos, possuindo valores iniciais iguais a 0 e 1
# respectivamente.
# Um ponto de atenção é que o stop não é incluído na sequência, portanto caso
# queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
# Seus valores são criados a medida que esta sequência é percorrida.

print(type(range(5)))
print(list(range(5)))
# definimos somente o valor de parada
print(list(range(1, 6)))
# definimos o valor inicial e o de parada
print(list(range(1, 11, 2)))
# definimos valor inicial, de parada e modificamos o passo para 2
print(list(range(10, 0, -1)))
# podemos utilizar valores negativos para as entradas também
