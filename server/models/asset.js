const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Asset', assetSchema);
