import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const sequelize = new Sequelize(process.env.POSTGRES_URI);

const connectDB = async () => {
  try {
    console.log(process.env.POSTGRES_URI);
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }

}
export  {connectDB,sequelize};
