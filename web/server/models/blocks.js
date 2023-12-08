import mongoose from 'mongoose'

// Define the schema for blocks
const blockSchema = new mongoose.Schema({
  block_id: {
    type: Number,
    required: true,
    unique: true,
    index: true // Index for the block_id field 
  },
  screen_id: {
    type: mongoose.Schema.Types.Number,
    ref: 'Screen' // Reference to the Screen model
  }
});

// Create the model based on the schema
const Block = mongoose.model('Block', blockSchema);

export {Block}; // Export the model for use in other files
