import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Post extends Model {}

Post.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false }
  },
  { sequelize, modelName: 'Post' }
);
