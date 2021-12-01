permissions = {"member", "group"}
# elementos separados por vírgula,envolvidos por chaves

permissions.add("root")
# adiciona um novo elemento ao conjunto
permissions.add("member")
# como o elemento já existe, nenhum novo item é adicionado ao conjunto
print(permissions)

print(permissions.union({"user"}))
# retorna um conjunto resultado da união;

print(permissions.intersection({"user", "member"}))
# retorna um conjunto resultante da intersecção dos conjuntos

print(permissions.difference({"user"}))
# retorna a diferença entre os dois conjuntos
