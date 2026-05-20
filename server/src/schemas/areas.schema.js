const { z } = require('zod')

const createAreaSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido')
})

const updateAreaSchema = z.object({
  name: z.string().min(1).optional()
})

module.exports = {
  createAreaSchema,
  updateAreaSchema
}