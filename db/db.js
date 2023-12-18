const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("inventario", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});


async function start (){
  try {
    await sequelize.authenticate();
    console.log("fine");
  } catch (error) {}
};



