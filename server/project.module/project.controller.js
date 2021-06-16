
const ReturnObj = require('./../models/return-object.model')
const Project = require('../project.module/project.model')
const express = require('express')
var bodyParser = require('body-parser')


// • Declaring GET method
module.exports = {


    list: async function (req, res) {
        try {
            const _data = await Project.find().populate("Categories", 'Content').exec()
            res.send(new ReturnObj(true, 'MSG_PROJECT_FOUND', 200, _data))

        } catch (error) {
            res.status(500).send(new ReturnObj(false, 'ERR_SOMETHING_WENT_WRONG', 500, null))
        }
    },


    save: async function (req, res) {
        try {
          const _project = new Project(req.body)
          const _userId = req.caller_id
          _project.CreatedBy = _userId
          _project.Members = [_userId]
    
          const _data = await _project.save()
          res.status(200).send(new ReturnObj(true, 'MSG_PROJECT_CREATED', 200, _data))
        } catch (error) {
          res.status(500).send(new ReturnObj(false, 'ERR_PROJECT_NOT_CREATED', 500, null))
        }
    },

    update: async function (req, res) {
      try {
        const _project = new Project(req.body)
        const _projectId = req.params.project_id
        console.log('ProjectID' , _projectId)
        // Project.updateOne(+project,_proj)
        const _data = await Project.findByIdAndUpdate(_projectId,{$set:{Title:_project.Title}},{new:true}).exec()
        res.status(200).send(new ReturnObj(true, 'MSG_PROJECT_CREATED', 200, _data))
      } catch (error) {
        console.log(error)
        res.status(500).send(new ReturnObj(false, 'ERR_PROJECT_NOT_CREATED', 500, error))
      }
  },

    delete: async function (req,res) {
      try{
        const _projectId = req.params.project_id
        console.log(_projectId)
        var _data = await Project.findByIdAndDelete(_projectId).exec()
        res.status(200).send(new ReturnObj(true, 'MSG_PROJECT_CREATED', 200, _data))
      }catch(err){
        console.log(err)
        res.status(500).send(new ReturnObj(false, 'ERR_PROJECT_NOT_CREATED', 500, error))
      }
    }

}