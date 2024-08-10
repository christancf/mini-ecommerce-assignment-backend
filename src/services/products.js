import {
  createProduct,
  deleteProduct,
  editProduct,
  readProduct,
  readProducts,
} from '../repositories/product.js'

export const addProduct = async (product) => {
  return await createProduct(product)
}

export const getProducts = async () => {
  return await readProducts()
}

export const getProduct = async (sku) => {
  return await readProduct(sku)
}

export const updateProduct = async (product) => {
  return await editProduct(product)
}

export const removeProduct = async (sku) => {
  return await deleteProduct(sku)
}
