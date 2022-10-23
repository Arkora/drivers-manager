import express from 'express'
import { driversReports, getDriverReports } from '../controllers/aggregations.js'
import { register,login, getUser,userReports, getUserWithSum } from '../controllers/userController.js'

const router = express.Router()

// router.get('/report',userReports)
router.get('/report',driversReports)
router.get('/:id',getDriverReports)
//router.get('/sums/:id',getUserWithSum)
router.post('/login',login)
router.post('/register',register)

export default router
