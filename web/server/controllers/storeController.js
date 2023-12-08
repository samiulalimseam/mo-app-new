import { Store } from "../models/store"

export const getStoreInfo = async (req, res) => {
    try {
        const store = await Store.findOne({ shop: })
        res.send({ message: 'Ok' })
    } catch (error) {
        res.send({ message: error })
    }
}

export const createstore = async (req, res) => {

    try {
        const data = req.body
        const response = await Store.findOneAndUpdate({ shop: data.store_url })
        res.send(response)
    } catch (error) {
        res.send({ message: error })
    }
}