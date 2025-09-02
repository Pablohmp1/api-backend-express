export function editCustomerController(req, res) {
  const dados = req.body
  res.json({ message: 'Cliente editado com sucesso!', customer: dados })
}
