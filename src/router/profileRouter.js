import express from 'express'
import { createProfileController } from '../controllers/profile/createProfileController.js'
import { listProfileController } from '../controllers/profile/listProfileController.js'
import { deleteProfileController } from '../controllers/profile/deleteProfileController.js'

const router = express.Router()
    
router.post('/', createProfileController)

router.get('/', listProfileController)

router.get('/:id', (req, res) => {

  const { id } = req.params.id
  res.json({message: 'Usuário consultado com sucesso!'})
})

router.put('/', (req, res) => {
  const dados = req.body
  res.json({message: 'Usuário editado com sucesso!'})
})

router.patch('/', (req, res) => {
  res.json({message: 'Usuário editado parcialmente com sucesso!'})
})

router.delete('/', deleteProfileController)

export default router