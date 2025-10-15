import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('DB conectada');
  } catch (e) {
    console.error('Error DB:', e);
  }
}
