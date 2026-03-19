import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email:           { type: String, required: true, unique: true },
  passwordHash:    { type: String, required: true },
  createdAt:       { type: Date, default: Date.now },
  streak:          { type: Number, default: 0 },
  wordsSearched:   { type: Number, default: 0 },
  searchHistory:   [{ char: String, searchedAt: { type: Date, default: Date.now } }],
  monthlyActivity: { type: Map, of: Number, default: {} }
})

export default mongoose.model('User', userSchema)