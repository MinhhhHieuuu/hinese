import { Router } from 'express'
import Word from '../models/Word.js'

const router = Router()

function stripTones(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
}

router.get('/', async (req, res) => {
  const { q } = req.query
  if (!q) return res.status(400).json({ error: 'No query' })

  const raw      = q.trim()
  const stripped = stripTones(raw)

  try {
    const result = await Word.findOne({
      $or: [
        { char:        raw                                          },  // 大
        { pinyin:      raw.toLowerCase()                            },  // dà
        { pinyinPlain: stripped                                     },  // da  ← exact match
        { meaning:     { $regex: `\\b${raw}\\b`, $options: 'i' }   },  // "big" whole word only
      ]
    })

    if (!result) return res.status(404).json({ error: 'Not found' })
    res.json(result)

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})
export default router