import { ProductsModel } from '../db/models/products.js';

const getAll = async () => {
  return await ProductsModel.find();
};

export const productsService = { getAll };
