import mongoose from 'mongoose'

// Define the schema for widgets
const widgetSchema = new mongoose.Schema({
  type : {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true, // Default value for the status field
    required: true
  },
  properties : {
    type: String,
    required: true
  }
});

// Create the model based on the schema
const Widget = mongoose.model('Widget', widgetSchema);

export {Widget}; // Export the model for use in other files
