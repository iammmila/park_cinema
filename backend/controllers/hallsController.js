const Halls = require("../models/hallsModel")

//! get element

exports.halls_getAll = (req, res) => {
    Halls.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.halls_getAll_byId = (req, res) => {
    const { id } = req.params;
    Halls.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Hall is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.halls_delete = (req, res) => {
    const { id } = req.params;
    Halls.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Hall is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.halls_post = async (req, res) => {
    const hall = req.body
    try {
        await Halls.create(hall)
        res.status(200).json({ message: "Hall is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.halls_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Halls.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Hall is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}