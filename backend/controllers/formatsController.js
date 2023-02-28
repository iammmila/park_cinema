const Formats = require("../models/formatsModel")

//! get element

exports.formats_getAll = (req, res) => {
    Formats.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.formats_getAll_byId = (req, res) => {
    const { id } = req.params;
    Formats.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Format is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.formats_delete = (req, res) => {
    const { id } = req.params;
    Formats.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Format is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.formats_post = async (req, res) => {
    const format = req.body
    try {
        await Formats.create(format)
        res.status(200).json({ message: "Format is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.formats_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Formats.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Format is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}