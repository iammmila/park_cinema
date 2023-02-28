const Genres = require("../models/genresModel.js")

//! get element

exports.genres_getAll = (req, res) => {
    Genres.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.genres_getAll_byId = (req, res) => {
    const { id } = req.params;
    Genres.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Genre is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.genres_delete = (req, res) => {
    const { id } = req.params;
    Genres.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Genre is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.genres_post = async (req, res) => {
    const genre = req.body
    try {
        await Genres.create(genre)
        res.status(200).json({ message: "Genre is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.genres_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Genres.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Genre is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}