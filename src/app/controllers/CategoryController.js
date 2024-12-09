
import * as Yup from 'yup';
import category from '../models/Category.js';
import Category from '../models/Category.js';

class CategoryController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required()
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
    const { name } = req.body;

    const category = await Category.create({
      name
    });

    return res.status(201).json({ category });
  }
  async index(req, res) {
    const categories = await Category.findAll();

    console.log({ userId: req.userId });

    return res.json(categories);
  }
}

export default new CategoryController()