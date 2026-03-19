import connectDB from './db.js'
import Word from './models/Word.js'

function stripTones(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

await connectDB()

const words = await Word.find({})
console.log(`Updating ${words.length} words...`)

for (const word of words) {
  word.pinyinPlain = stripTones(word.pinyin)
  await word.save()
}

console.log('Done!')
process.exit()