
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// • Create Schema. This will be used later to define model fields (db columns)


const ProjectSchema = new mongoose.Schema({
  Title: String,
  Content: String,

  CreatedBy: Schema.Types.ObjectId
})


// • Created Model below will help us to work with MongoDB easily.
var ProjectModel = mongoose.model('Project', ProjectSchema)

// • Export Model
module.exports = ProjectModel
