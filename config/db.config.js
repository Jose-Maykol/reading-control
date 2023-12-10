require('dotenv').config()

module.exports = {
  config: {
    connectionString: process.env.DB_CONNECTION_STRING
  }
}
