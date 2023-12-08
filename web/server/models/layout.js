import mongoose from 'mongoose' 

// Define the schema for layouts
const layoutSchema = new mongoose.Schema({
  layoutId: {
    type: Number,
    required: true,
    unique: true,
    index: true // Index for the layoutId field
  },
  shop: {
    type: mongoose.Schema.Types.Number,
    ref: 'Store' // Reference to the Store model
  }
});

// Create the model based on the schema
const Layout = mongoose.model('Layout', layoutSchema);

export {Layout} // Export the model for use in other files
