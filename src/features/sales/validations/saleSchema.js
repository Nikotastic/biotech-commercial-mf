import * as yup from 'yup'

export const saleSchema = yup.object({
  clientId: yup.string().required('El cliente es requerido'),
  animalId: yup.string().required('El animal es requerido'),
  quantity: yup.number().positive('Debe ser positivo').required('La cantidad es requerida'),
  pricePerUnit: yup.number().positive('Debe ser positivo').required('El precio es requerido'),
  paymentMethod: yup.string().required('El método de pago es requerido'),
  deliveryDate: yup.date().required('La fecha de entrega es requerida'),
  notes: yup.string().max(500, 'Máximo 500 caracteres')
})