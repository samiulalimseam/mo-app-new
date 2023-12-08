import { Widget } from "../models/widget.js"


export const getWidget = async (req, res) => {
    try {
        const store = await Widget.findOne({ shop: req.body.shop})
        res.send({ message: 'Ok' })
    } catch (error) {
        res.send({ message: error })
    }
}

export const updateWidget = async (req, res) => {
    try {
        console.log('Update API hit:', req.body);
        const data = req.body;
        const id = data?.id || null; // Use either data.id or null if data.id is undefined

        if (id === null) {
            return res.status(400).send({ message: 'ID is required for update.' });
        }

        const response = await Widget.findOneAndUpdate(
            { _id: id }, // Use _id for MongoDB's default ObjectId
            { $set: data }, // Update fields with provided data
            { new: true } // Return the updated document
        );

        if (!response) {
            return res.status(404).send({ message: 'Widget not found.' });
        }

        res.send({ message: 'Widget updated successfully.', response });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error updating widget.', error });
    }
};


export const createWidget = async (req, res) => {
    try {
        console.log('Create API hit:', req.body);
        const data = req.body;

        // Create a new widget without specifying the _id
        const newWidget = new Widget(data);
        const response = await newWidget.save();

        res.send({ message: 'Widget created successfully.', response });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error creating widget.', error });
    }
};


