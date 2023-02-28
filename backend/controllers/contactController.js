const Contact = require("../models/contactModel")

//! get element

exports.contact_getAll = (req, res) => {
    Contact.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.contact_getAll_byId = (req, res) => {
    const { id } = req.params;
    Contact.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Contact is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.contact_delete = (req, res) => {
    const { id } = req.params;
    Contact.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Contact is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.contact_post = async (req, res) => {
    const contact = req.body
    try {
        await Contact.create(contact)
        res.status(200).json({ message: "Contact is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.contact_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Contact.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Contact is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}