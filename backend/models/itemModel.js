const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

    Item_Name: {
        type: String,
    },
    description: {
        type: String,
    },

    // images: [
    //     {
    //         public_id: {
    //             type: String,

    //         },
    //         url: {
    //             type: String,

    //         }
    //     }
    // ],
    Category_Name: {
        type: String,

    },
    material_Name: {
        type: String,

    },


});

module.exports = mongoose.model("Item", itemSchema);

