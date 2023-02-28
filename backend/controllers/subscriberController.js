const Subscriber = require("../models/subscriberModel")

//! get element

exports.subscriber_getAll = (req, res) => {
    Subscriber.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.subscriber_getAll_byId = (req, res) => {
    const { id } = req.params;
    Subscriber.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Subscriber is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.subscriber_delete = (req, res) => {
    const { id } = req.params;
    Subscriber.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Subscriber is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.subscriber_post = async (req, res) => {
    const subscriber = req.body
    try {
        await Subscriber.create(subscriber)
        res.status(200).json({ message: "Subscriber is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.subscriber_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Subscriber.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Subscriber is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}