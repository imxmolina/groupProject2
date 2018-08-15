module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        },
        distributor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        },
        case_quantity: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        bottle_quantity: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        bottle_vol: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        pars: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        current_stock: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });

    Post.associate = function (models) {
        Post.belongTo(model.client, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Product;
};
