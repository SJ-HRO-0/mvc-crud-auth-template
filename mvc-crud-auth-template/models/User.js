import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class User extends Model {}

User.init(
  {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false }
  },
  { sequelize, modelName: 'User' }
);
