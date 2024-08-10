import { Router } from 'express'
import {
  createProduct,
  deleteProduct,
  editProduct,
  readProduct,
  readProducts,
} from '../controllers/product.js'

const router = Router()

router.get('/:sku', readProduct)
router.get('/', readProducts)
router.post('/add', createProduct)
router.put('/edit', editProduct)
router.delete('/delete/:sku', deleteProduct)

export default router
