import express from 'express'
import { createCustomerController } from '../controllers/customers/createCustomerController.js'
import { listCustomerController } from '../controllers/customers/listCustomerController.js'
import { getByIdCustomerController } from '../controllers/customers/getByIdCustomerController.js'
import { editCustomerController } from '../controllers/customers/editCustomerController.js'
import { deleteCustomerController } from '../controllers/customers/deleteCustomerController.js'

const router = express.Router()

router.post('/', createCustomerController)
router.get('/', listCustomerController)
router.get('/:id', getByIdCustomerController)
router.put('/', editCustomerController)
router.patch('/', (req, res) => {
  res.json({ message: 'Cliente editado parcialmente com sucesso!' })
})
router.delete('/', deleteCustomerController)

export default router
