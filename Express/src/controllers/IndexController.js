const sequelize = require('@root/sequelize-config')

module.exports = {
    index: async (req, res) => {
        await sequelize.authenticate();
        res.render("index")
    }
}