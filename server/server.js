import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db.js'
import authRoutes     from './routes/auth.js'
import wordRoutes     from './routes/words.js'
import progressRoutes from './routes/progress.js'

dotenv.config()
await connectDB()

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))  // your Vite frontend
app.use(express.json())

app.use('/api/auth',     authRoutes)
app.use('/api/words',    wordRoutes)
app.use('/api/progress', progressRoutes)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)