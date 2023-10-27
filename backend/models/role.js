// models/Role.js

import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

export default Role;
