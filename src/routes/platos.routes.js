import { Router } from 'express'
import { createPlatos, deletePlatos, getPlatos, getPlato, updatePlatos } from '../controllers/platos.controller.js'

const router = Router()

router.get('/dishes',getPlatos)
router.get('/dishes/:id',getPlato)
router.post('/dishes',createPlatos)
router.patch('/dishes/:id',updatePlatos)
router.delete('/dishes/:id',deletePlatos)

export default router