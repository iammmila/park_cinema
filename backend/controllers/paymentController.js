const Payments = require("../models/paymentModel")

//! get element

exports.payment_getAll = (req, res) => {
    Payments.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.payment_getAll_byId = (req, res) => {
    const { id } = req.params;
    Payments.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "history is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.payment_delete = (req, res) => {
    const { id } = req.params;
    Payments.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "history is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.payment_post = async (req, res) => {
    const payment = req.body
    try {
        await Payments.create(payment)
        res.status(200).json({ message: "history is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.payment_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Payments.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'history is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}