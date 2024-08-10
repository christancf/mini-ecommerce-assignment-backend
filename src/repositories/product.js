import Product from '../models/product.js'

const checkRange = (error) => (error.code > 599 ? 400 : error.code)

export const createProduct = async (product) => {
  try {
    await new Product(product).save()
    return {
      message: 'Product created successfully',
      status: 201,
    }
  } catch (error) {
    console.log(error)
    return {
      message: 'Product could not be created',
      status: checkRange(error),
    }
  }
}

export const readProducts = async () => {
  try {
    const products = await Product.find()
    return {
      message: 'Products retrieved successfully',
      payload: products,
      status: 200,
    }
  } catch (error) {
    return {
      message: 'Products not found',
      status: checkRange(error),
    }
  }
}

export const readProduct = async (sku) => {
  try {
    console.log(sku)
    const product = await Product.findOne({ sku })
    return {
      message: 'Product retrieved successfully',
      payload: product,
      status: 200,
    }
  } catch (error) {
    return {
      message: 'Product not found',
      status: checkRange(error),
    }
  }
}

export const editProduct = async (product) => {
  try {
    const newProduct = await Product.findOneAndUpdate({ sku: product.sku }, product, { new: true })
    return {
      message: 'Product updated successfully',
      status: 201,
    }
  } catch (error) {
    return {
      message: 'Product could not be updated',
      status: checkRange(error),
    }
  }
}

export const deleteProduct = async (sku) => {
  try {
    await Product.findOneAndDelete({ sku })
    return {
      message: 'Product removed successfully',
      status: 204,
    }
  } catch (error) {
    return {
      message: 'Product could not be removed',
      status: checkRange(error),
    }
  }
}
