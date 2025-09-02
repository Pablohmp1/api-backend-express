import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import { listProductController } from '../controllers/product/listProductController.js'
import { getByIdProductController } from '../controllers/product/getByIdProductController.js'
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'


const router = express.Router()

// Cria um novo produto
router.post('/', createProductController)
// Consulta todos os produtos
router.get('/', listProductController)
// Consulta um produto pelo ID
router.get('/:id', getByIdProductController)
// Edita um produto (substituição completa)
router.put('/', editProductController)
// Edita parcialmente um produto
router.patch('/', (req, res) => {
  res.json({ message: 'Produto editado parcialmente com sucesso!' })
})

// Deleta um produto
router.delete('/', deleteProductController)

export default router