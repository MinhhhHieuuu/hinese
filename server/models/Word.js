import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema({
  char:          String,
  pinyin:        String,
  pinyinPlain:   String,
  meaning:       String,
  mnemonic:      String,
  radicals:      [String],
  examples:      [{ zh: String, pinyin: String, en: String }],
  strokes:       Number,
  level:         String,   // 'HSK1', 'HSK2', etc.
  charImage:     String,
  mnemonicImage: String,
})

// One collection — filter by level field
export default mongoose.model('Word', wordSchema)