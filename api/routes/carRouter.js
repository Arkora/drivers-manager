import express from 'express'
import { addValue } from '../controllers/metricsController.js'
import { addCar } from '../controllers/carController.js'

const router = express.Router()

router.post('/add',addCar)

export default router