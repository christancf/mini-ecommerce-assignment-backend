import e from 'express'
import cors from 'cors'
import helmet from 'helmet'
import connectDB from './database/mongo.js'
import apiRouter from './routes/index.js'
const app = e()

app.use(cors({ origin: true, credentials: true }))
app.use(helmet())

app.use(e.json())
app.use(e.urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.use('/', (req, res) => {
  res.json({ message: 'server is running successfully' })
})

connectDB()

app.listen(process.env.PORT, () =>
  console.log(`server is up and running on port ${process.env.PORT}`),
)
