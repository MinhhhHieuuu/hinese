import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = Router()

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  const existing = await User.findOne({ email })
  if (existing) return res.status(400).json({ error: 'Email already registered' })

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await User.create({ email, passwordHash })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
  res.json({ token, email: user.email })
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ error: 'User not found' })

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) return res.status(400).json({ error: 'Wrong password' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
  res.json({ token, email: user.email })
})

export default router