import express from 'express'
import { addValue } from '../controllers/metricsController.js'
import { addCar, deleteCar } from '../controllers/carController.js'

const router = express.Router()

router.post('/add',addCar)
router.post('/add_values',addValue)
router.delete('/delete/:id',deleteCar)

export default router