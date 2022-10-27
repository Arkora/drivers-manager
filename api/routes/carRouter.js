import express from 'express'
import { addValue,deleteMetric,updateMetric } from '../controllers/metricsController.js'
import { addCar, deleteCar, getCar, getCars } from '../controllers/carController.js'

const router = express.Router()

router.get('/:id',getCar)
router.get('/',getCars)
router.post('/add',addCar)
router.post('/add_values',addValue)
router.patch('/update/metric/:id',updateMetric)
router.delete('/delete/metric/:id',deleteMetric)
router.delete('/delete/:id',deleteCar)

export default router