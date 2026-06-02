const app = require('./src/app')
const sequelize = require('./src/config/database')

const PORT = process.env.PORT || 3000

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch(err => console.log(err))