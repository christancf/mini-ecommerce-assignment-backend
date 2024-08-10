import asyncHandler from '../middleware/asyncHandler.js'
import {
  addProduct,
  getProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from '../services/products.js'

export const createProduct = asyncHandler(async (req, res, next) => {
  const result = await addProduct(req.body)
  res.status(result.status).json({ result })
})

export const readProducts = asyncHandler(async (req, res, next) => {
  const result = await getProducts()
  res.status(result.status).json({ result })
})

export const readProduct = asyncHandler(async (req, res, next) => {
  const result = await getProduct(req.params.sku)
  res.status(result.status).json({ result })
})

export const editProduct = asyncHandler(async (req, res, next) => {
  const result = await updateProduct(req.body)
  res.status(result.status).json({ result })
})

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const result = await removeProduct(req.params.sku)
  res.status(result.status).json({ result })
})
