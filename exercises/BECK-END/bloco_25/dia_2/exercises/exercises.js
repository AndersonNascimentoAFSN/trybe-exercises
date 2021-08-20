// Agora, a prática

/* 
  O MongoDb possui diversas ferramentas, como, por exemplo, mongo , mongosh , Compass e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.

  Você continuará utilizando o banco de dados erp do dia anterior. Nos exercícios 1 a 8 , você utilizará o mesmo pipeline . A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios. Vamos lá? 
*/

use erp;

// Exercício 1: Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes. Algumas dicas:
// - arredonde para baixo o valor da idade;
// - calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// - 1 dia é igual a 86400000 milissegundos.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $divide: [
                {
                  $subtract:
                    ["$$NOW", "$dataNascimento"]
                }, 864e5
              ]
            }, 365
          ]
        },
      }
    }
  },
]);

// Exercício 2: Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $divide: [
                {
                  $subtract:
                    ["$$NOW", "$dataNascimento"]
                }, 864e5
              ]
            }, 365
          ]
        },
      }
    }
  },
  {
    $match: {
      idade: {
        $gte: 18, $lte: 25
      }
    }
  },
  {
    $count: "TotalClientes",
  }
]);


// Exercício 3: Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $divide: [
                {
                  $subtract:
                    ["$$NOW", "$dataNascimento"]
                }, 864e5
              ]
            }, 365
          ]
        },
      },
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: {
        id: "$clienteId",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$id", "$clienteId"]
            }
          }
        }
      ],
      as: "compras"
    }
  }
]);



db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  }
]);

// Exercício 4: Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.
db.clientes.aggregate([
  {
    $lookup: {
      from: "vendas",
      let: {
        id: "$clienteId",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$$id", "$clienteId"] },
              ]
            }
          }
        },
        {
          $match: {
            dataVenda: {
              $gte: ISODate("2019-06-01"),
              $lte: ISODate("2020-03-31")
            }
          }
        }
      ],
      as: "compras"
    }
  }
]);

// Erro no gabarito:
// db.clientes.aggregate([
//   {
//     $addFields: {
//       idade: {
//         $floor:{
//           $divide: [
//             { $subtract: ["$$NOW", "$dataNascimento"]},
//             { $multiply: [86400000, 365] }
//           ]
//         }
//       }
//     }
//   },
//   {
//     $lookup: {
//       from: 'vendas',
//       localField: 'clienteId',
//       foreignField: 'clienteId',
//       as: 'compras'
//     }
//   },
//   {
//     $match: {
//       "compras.dataVenda": {
//         $gte: ISODate('2019-06-01'),
//         $lte: ISODate('2020-03-31')
//       }
//     }
//   }
// ]);

// Exercício 5: Confira o número de documentos retornados pelo pipeline com o método itcount(). Até aqui, você deve ter 486 documentos sendo retornados.
db.clientes.aggregate([
  {
    $lookup: {
      from: "vendas",
      let: {
        id: "$clienteId",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$$id", "$clienteId"] },
              ]
            }
          }
        },
        {
          $match: {
            dataVenda: {
              $gte: ISODate("2019-06-01"),
              $lte: ISODate("2020-03-31")
            }
          }
        }
      ],
      as: "compras"
    }
  }
]).itcount();


// Erro no gabatito:
// db.clientes.aggregate([
//   {
//     $addFields: {
//       idade: {
//         $floor:{
//           $divide: [
//             { $subtract: ["$$NOW", "$dataNascimento"]},
//             { $multiply: [86400000, 365] }
//           ]
//         }
//       }
//     }
//   },
//   {
//     $lookup: {
//       from: 'vendas',
//       localField: 'clienteId',
//       foreignField: 'clienteId',
//       as: 'compras'
//     }
//   },
//   {
//     $match: {
//       "compras.dataVenda": {
//         $gte: ISODate('2019-06-01'),
//         $lte: ISODate('2020-03-31')
//       }
//     }
//   }
// ]).itcount();

// Exercício 6: Ainda nesse pipeline, descubra os 5 estados com mais compras.
db.clientes.aggregate([
  {
    $lookup: {
      from: "vendas",
      let: {
        id: "$clienteId",
        uf: "$endereco.uf"
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$id", "$clienteId"]
            }
          },
        },
        {
          $match: {
            dataVenda: {
              $gte: ISODate("2019-06-01"),
              $lte: ISODate("2020-03-31")
            }
          }
        },
        {
          $count: "total"
        },
      ],
      as: "compras"
    },
  },
  {
    $unwind: "$compras"
  },
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: "$compras.total" }
    }
  },
  {
    $sort: {
      total: -1
    }
  },
  {
    $limit: 5
  }
]);


// Exercício 7: Descubra o cliente que mais consumiu QUEIJO PRATO. Retorne um documento com a seguinte estrutura:

/* {
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
} */

db.clientes.aggregate([
  {
    $lookup: {
      from: "vendas",
      let: {
        id: "$clienteId",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$id", "$clienteId"]
            }
          }
        },
        {
          $unwind: "$itens",
        },
        {
          $match: {
            "itens.nome": "QUEIJO PRATO"
          }
        },
        {
          $group: {
            _id: "$clienteId",
            total: { $sum: "$itens.quantidade" }
          }
        }
      ],
      as: "compras"
    }
  },
  {
    $unwind: "$compras"
  },
  {
    $sort: {
      "compras.total": -1
    }
  },
  {
    $limit: 1
  }, 
  {
    $project: {
      _id: 0,
      nomeCliente: "$nome",
      uf: "$endereco.uf",
      totalConsumido: "$compras.total",
    }
  }
]);

// Gabarito:
// db.vendas.aggregate([
//   {
// match: {
//       "itens.nome": "QUEIJO PRATO"
//     }
//   },
//   { $unwind: "$itens" },
//   {
// match: {
//       "itens.nome": "QUEIJO PRATO"
//     }
//   },
//   {
// group: {
//       _id: "$clienteId",
//       totalConsumido: {
// sum: "$itens.quantidade"
//       }
//     }
//   },
//   {
// sort: { totalConsumido: -1 }
//   },
//   { $limit: 1 },
//   {
// lookup: { // Seleciona todos os clientes com as suas respectivas transações feitas;
//       from: 'clientes',
//       localField: '_id',
//       foreignField: 'clienteId',
//       as: 'cliente'
//     }
//   },
//   { $unwind: "$cliente" },
//   {
// project: {
//       nomeCliente: "$cliente.nome",
//       uf: "$cliente.endereco.uf",
//       totalConsumido: "$totalConsumido",
//       _id: 0
//     }
//   }
// ]);

// Exercício 8: Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista.

db.vendas.aggregate([
  {
    $match: {
      status: "EM SEPARACAO",
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  }, 
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60 * 1000]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);


// Gabarito:
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60000]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);