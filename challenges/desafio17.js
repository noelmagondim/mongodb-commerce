db.resumoProdutos.insertOne(
    { franquia: "McDonalds",
      totalProdutos: db.produtos.countDocuments({}),
    },
);
  
db.resumoProdutos.find(
    { franquia: "McDonalds" },
    { franquia: 1, totalProdutos: 1, _id: 0 },
);