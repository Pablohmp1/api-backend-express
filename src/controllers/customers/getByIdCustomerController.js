export function getByIdCustomerController(req, res) {
  const id = req.params.id
  res.json({ message: `Cliente ${id} consultado com sucesso!` })
}
