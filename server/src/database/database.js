import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres', 'lucas', 'passdb', {
  host: 'tasks-db',
  dialect: 'postgres',
});
