import express from 'express'
import { register,login, getUser,userReports, getUserWithSum } from '../controllers/userController.js'

const router = express.Router()

router.get('/report',userReports)
router.get('/:id',getUserWithSum)
//router.get('/sums/:id',getUserWithSum)
router.post('/login',login)
router.post('/register',register)

export default router
