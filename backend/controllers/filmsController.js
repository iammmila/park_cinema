const Films = require("../models/filmsModel")

//! get element

exports.films_getAll = (req, res) => {
    Films.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.films_getAll_byId = (req, res) => {
    const { id } = req.params;
    Films.findById(id, (err, docs) => {
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

exports.films_delete = (req, res) => {
    const { id } = req.params;
    Films.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "film is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.films_post = async (req, res) => {
    const film = req.body
    try {
        await Films.create(film)
        res.status(200).json({ message: "films is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.films_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Films.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Films is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}