const Cinemas = require("../models/cinemasModel")

//! get element
exports.cinemas_getAll = (req, res) => {
    Cinemas.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.cinemas_getAll_byId = (req, res) => {
    const { id } = req.params;
    Cinemas.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.cinemas_delete = (req, res) => {
    const { id } = req.params;
    Cinemas.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "cinema is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.cinemas_post = async (req, res) => {
    const film = req.body
    try {
        await Cinemas.create(film)
        res.status(200).json({ message: "cinemas is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element
exports.cinemas_put = async (req, res) => {
    const data = req.body;
    try {
        await Cinemas.findByIdAndUpdate(data._id, {
            name: data.name,
            phoneNumber: data.phoneNumber,
            workHour: data.workHour,
            addressLine: data.addressLine,
            addressPath: data.addressPath,
            images: data.images
        });
        res.status(200).json({
            message: "cinema is updated",
        });
    } catch (err) {
        res.status(500).json({
            message: "cinema can't updated",
        });
    }
}