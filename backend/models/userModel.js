import { sequelize } from "../config/db.js";
import { Sequelize, DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

const User = sequelize.define(
  "User",
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
    {
    hooks: {
        beforeCreate: async function(User) {
            const salt = await bcrypt.genSalt(10); //whatever number you want
            User.password = await bcrypt.hash(User.password, salt);
        }
        
    
        },
    
  },
  
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

User.prototype.validatePassword = async function (password) {
  return bcrypt.compareSync(password, this.password);
}

export default User;
