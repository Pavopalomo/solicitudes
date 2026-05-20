const router = require('express').Router()
const { isAuthenticated } = require('../middleware/auth')
const { checkRole } = require('../middleware/authorize')
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')
const { validate } = require('../middleware/validate')
const { createAreaSchema, updateAreaSchema} = require('../schemas/areas.schema')

router.post('/', isAuthenticated, validate(createAreaSchema), create)

router.put('/:id', isAuthenticated, validate(updateAreaSchema), update)

router.use(isAuthenticated)

router.get('/', getAll)
router.get('/:id', getById)
//router.post('/', checkRole('admin'), create)
//router.put('/:id', checkRole('admin'), update)
router.delete('/:id', checkRole('admin'), remove)

module.exports = router
