const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("inventario", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});
const db = {};

db.start = async () => {
  try {
    await sequelize.authenticate();
    console.log("fine");
  } catch (error) {}
};

module.exports = db;
