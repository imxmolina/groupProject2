var db = require("../models");

module.exports = function(app){

    app.get("/api/products", function (req, res){
        var query = {};
        if (req.query.cient_id){
            query.ClientId = req.query.client_id;
        }

        db.Product.findAll({
            where: query,
            include: [db.Client]
        }).then(function(dbProduct){
            res.json(dbProduct);
        });
    });

    app.get("/api/products/:id", function(req,res){
        db.Product.findOne({
            where:{
                id: req.params.id
            },
            include:[db.Client]
        }).then(function(dbProduct){
            res.json(dbProduct);
        });
    });

    app.post("/api/products", function (req,res){
        db.Product.create(req.body).then(function(dbProduct){
            res.json(dbProduct);
        });
    });

    app.delete("/api/products/:id", function(req,res){
        db.Product.destroy({
            where:{
                id:req.params.id
            }
        }).then(function(dbProduct){
            res.json(dbProduct)
        });
    });

    app.put("/api/products", function(req,res){
        db.Product.update(
            {current_stock: req.body.current_stock},
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbProduct){
                res.json(dbProduct);
            });
    });
};
