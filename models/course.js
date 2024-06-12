const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "title":String,
        "description":String,
        "date":String,
        "duration":String,
        "venue":String,
        "trainer":String,
    }
)

let coursemodel=mongoose.model("courses",Schema);
module.exports={coursemodel}