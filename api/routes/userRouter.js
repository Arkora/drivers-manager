import express from 'express'
import { register,login, getUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/:id',getUser)
router.post('/login',login)
router.post('/register',register)

export default router
