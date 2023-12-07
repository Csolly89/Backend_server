const router = require('express').Router()
const { getAllPeople, getPersonById, createPerson } = require('../Controllers/Person')

router.get('/all', getAllPeople)
router.get('/:id',getPersonById)
router.post('/', createPerson)

module.exports = router