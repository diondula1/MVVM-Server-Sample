const router = require('express').Router()
const project = require('./../MVVM-Server-Sample/server/project.module/project.service')

router.use('/project', project)

module.exports = router
