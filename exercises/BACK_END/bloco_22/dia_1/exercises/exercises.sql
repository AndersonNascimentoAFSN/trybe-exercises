-- 1) Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
/* 
  -Nome;
  -Espécie;
  -Sexo;
  -Idade;
  -Localização.

*Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
Siga os passos aprendidos no dia de hoje para modelar essa base de dados.
 */



-- Database Design - Como modelar um banco de dados
/* 
Existem alguns passos a serem seguidos durante a modelagem e criação de um banco de dados. Um fluxo bastante comum nesse processo consiste em:
  1. Identificar as entidades , atributos e relacionamentos com base na descrição do problema;
  2. Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1;
  3. Criar um banco de dados para conter suas tabelas;
  4. Criar e modelar tabelas tendo o diagrama do passo 2 como base.
 */

 /*
 1)
  -Entidades
    animals;
    species;
    caregivers;
    managers;
    localization;
    animals_caregivers;

  -Atributos
    animals: id, name, species, caregiver, location
    species: id, name
    caregivers: id, name, manager
    manager: id, name
    locations: id, name
  -Relacionamentos
 */
