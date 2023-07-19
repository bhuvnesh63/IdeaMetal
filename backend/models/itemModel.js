
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    Item_Name: {
        type: String,
    },
    description: {
        type: String,
    },

    Category_Name: {
        type: String,

    },
    material_Name: {
        type: String,

    },
    image: {
        data: Buffer,
        contentType: String
      },


});

module.exports = mongoose.model("Item", itemSchema);

