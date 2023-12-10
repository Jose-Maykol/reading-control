const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const port = 8081
const app = express()

require('./database/db')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Control de lectura')
})

const readingControlRoutes = require('./routes/readingControl.routes')
app.use('/reading-control', readingControlRoutes)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
