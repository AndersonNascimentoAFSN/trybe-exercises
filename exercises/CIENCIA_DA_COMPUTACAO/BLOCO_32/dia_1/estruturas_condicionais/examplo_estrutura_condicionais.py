position = ""
salary = 3500

if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

print('A posição é:', position);

# Em alguns casos, que não prejudiquem a legibilidade, podemos criar estruturas de mapeamento ( dicts ) para simplificar o aninhamento de condicionais. 
key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}

print(from_to[key])


from random import randint

pantheon_of_arton = [
    {"nome": "Wyanna", "domínio": "Magia"},
    {"nome": "Nimb", "domínio": "Sorte"},
    {"nome": "Ahadarak", "domínio": "Tormenta"},
]

dice_roll = randint(1, 20)

if dice_roll == 1:
    print("Vixi... Deu ruim!", dice_roll)
elif 2 <= dice_roll <= 5:
    print('Ahadarak, porque me atormentas!', dice_roll)
elif 16 <= dice_roll <= 19:
    print('Nimb, obrigado pela sorte!', dice_roll)
else:
    print('Agora ninguém me segura!', dice_roll)
