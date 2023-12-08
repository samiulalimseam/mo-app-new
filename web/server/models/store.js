import mongoose from 'mongoose'



// Define the schema
const storeSchema = new mongoose.Schema({
    
    shop: {
      type: String,
      required: true,
      index : true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  });
  
  // Create the model based on the schema
  const Store = mongoose.model('Store', storeSchema);
  export {Store}