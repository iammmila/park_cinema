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
    const { id } = req.params
    const data = req.body
    try {
        await Cinemas.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Cinema is not found' });
        }Movie-Seat-Booking-master/ 
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}