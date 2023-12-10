const express = require('express')
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

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})
