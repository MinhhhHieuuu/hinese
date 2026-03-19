import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default async function connectDB() {
  console.log('Connecting to MongoDB...', process.env.MONGO_URI)
  await mongoose.connect(process.env.MONGO_URI)
  console.log('MongoDB connected')
}