import express from 'express'
import { addValue } from '../controllers/metricsController.js'
import { addCar, deleteCar, getCar, getCars } from '../controllers/carController.js'

const router = express.Router()

router.get('/:id',getCar)
router.get('/',getCars)
router.post('/add',addCar)
router.post('/add_values',addValue)
router.delete('/delete/:id',deleteCar)

export default router