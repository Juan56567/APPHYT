const { Sequelize } = require('sequelize')

const database = process.env.database
const host = process.env.host
const user = process.env.user
const password = process.env.password



const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql'
  });

module.exports = sequelize