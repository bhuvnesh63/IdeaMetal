const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    materialType: {
        type: String,
    },
   

});

module.exports = mongoose.model("Material",ModelSchema);