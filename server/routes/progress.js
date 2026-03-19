import { Router } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = Router()

// Middleware — verify token
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]

  // No token or literally the string "null"
  if (!token || token === 'null' || token === 'undefined') {
    return res.status(401).json({ error: 'Not logged in' })
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
// GET /api/progress  — fetch user's stats
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-passwordHash')
  res.json(user)
})

// POST /api/progress/track  — call this every time a user searches a word
router.post('/track', auth, async (req, res) => {
  const { char } = req.body
  const monthKey = new Date().toISOString().slice(0, 7)  // "2026-03"

  await User.findByIdAndUpdate(req.user.id, {
    $inc: {
      wordsSearched: 1,
      [`monthlyActivity.${monthKey}`]: 1
    },
    $push: {
      searchHistory: { char, searchedAt: new Date() }
    }
  })
  res.json({ ok: true })
})

export default router