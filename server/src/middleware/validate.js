const { ZodError } = require('zod')

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body)
  if (!result.success) {
    next(result.err)
  }
  req.body = result.data
  next()
}

module.exports = { validate }