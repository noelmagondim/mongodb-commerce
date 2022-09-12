db.produtos.updateMany(
    { valoresNutricionais: {
        $elemMatch: {
            tipo: "sódio",
            $and: [
                { percentual: { $lt: 40 } },
                { percentual: { $gt: 20 } },
            ],
        },
    } },
    { $push: {
        tags: {
            $each: ["contém sódio"],
        },
    } },
);
  
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });