people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}

# elementos são acessados por suas chaves
print(people_by_id[1])  # saída: Cássio

del people_by_id[1]
# elementos podem ser removidos com a palavra chave del
print(people_by_id)

print(people_by_id.keys())
print(people_by_id.values())
print(people_by_id.items())
