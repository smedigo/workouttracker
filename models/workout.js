const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
constworkoutSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"

    },





});


const Workout = mongoose.model ("Workout", workoutSchema);

module.exports = Workout;