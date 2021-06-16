const express = require('express')
const router = express.Router()
const projectService = require('./project.controller')


router.get('/', projectService.list)
router.post('/', projectService.save)
router.delete('/:project_id' , projectService.delete)
router.post('/:project_id' , projectService.update)
module.exports = router