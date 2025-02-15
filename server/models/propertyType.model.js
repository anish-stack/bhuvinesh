const mongoose = require('mongoose');

const propertyTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('PropertyType', propertyTypeSchema);