const moongose = require('mongoose')
const { config } = require('../config/db.config')

moongose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log(err))
