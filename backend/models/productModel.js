import { sequelize } from "../config/db.js";
import { Sequelize, DataTypes } from "sequelize";
import User from './userModel.js';
const Produkt = sequelize.define(
    "Produkt",
    { 
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
          },
       ime: {
        type: DataTypes.STRING,
        allowNull: false
          },
        opis: {
            type: DataTypes.TEXT,
            allowNull: true
          },
         cena: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
          },
          SKU: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
          },
          proizvajalec: {
            type: DataTypes.STRING,
            allowNull: true
          },
          barva: {
            type: DataTypes.STRING,
            allowNull: true
          },
         stanje:{
            type: DataTypes.STRING,
            allowNull: true

         },
         slike:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
          },
         
         userId: {
            type: DataTypes.INTEGER,
            references: {
              model: User,
              key: 'id'
            },
            onDelete: 'CASCADE'
          }
          
    },
    
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Produkt", // We need to choose the model name
    }
  );

  // Define associations
User.hasMany(Produkt, { foreignKey: 'userId', onDelete: 'CASCADE' });
Produkt.belongsTo(User, { foreignKey: 'userId' });
  
// Badge Model with iconReference field added
const Badge = sequelize.define(
  "Badge",
  { 
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iconReference: {  // New field for icon reference
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "Badge",
  }
);
// Many-to-many association between Produkt and Badge
const ProduktBadge = sequelize.define('ProduktBadge', {});

Produkt.belongsToMany(Badge, { through: ProduktBadge, foreignKey: 'produktId' });
Badge.belongsToMany(Produkt, { through: ProduktBadge, foreignKey: 'badgeId' });
 
  
  export default Produkt;
  export { Badge, ProduktBadge };
  
  