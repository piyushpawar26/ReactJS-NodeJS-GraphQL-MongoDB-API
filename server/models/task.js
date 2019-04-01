const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    workerId: String,
    title: String,
    description: String,
    assetId: String,
    timeOfAllocation: String,
    taskToBePerformedBy: String
});

module.exports = mongoose.model('Task', taskSchema);
