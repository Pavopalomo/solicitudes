const router = require('express').Router()
const { isAuthenticated } = require('../middleware/auth')
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')
const { validate } = require('../middleware/validate')
const { createRequestSchema, updateRequestSchema } = require('../schemas/requests.schema')

router.post('/', isAuthenticated, validate(createRequestSchema), create)
router.put('/:id', isAuthenticated, validate(updateRequestSchema), update)

router.use(isAuthenticated)

router.get('/', getAll)
router.get('/:id', getById)
//router.post('/', create)
//router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
