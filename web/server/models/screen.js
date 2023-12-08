import mongoose from "mongoose";

// Define the schema for screens
const screenSchema = new mongoose.Schema({
  screen_id: {
    type: Number,
    required: true,
    unique: true,
    index: true // Index for the screen_id field
  },
  layoutId: {
    type: mongoose.Schema.Types.Number,
    ref: 'Layout' // Reference to the Layout model
  }
});

// Create the model based on the schema
const Screen = mongoose.model('Screen', screenSchema);

export {Screen} // Export the model for use in other files
