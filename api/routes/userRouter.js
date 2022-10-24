import express from 'express'
import { driversReports, getDriverReports } from '../controllers/aggregations.js'
import { register,login } from '../controllers/userController.js'

const router = express.Router()


router.get('/report',driversReports)
router.get('/:id',getDriverReports)
router.post('/login',login)
router.post('/register',register)

export default router
