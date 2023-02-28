const Subtitles = require("../models/subtitlesModel")

//! get element

exports.subtitles_getAll = (req, res) => {
    Subtitles.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.subtitles_getAll_byId = (req, res) => {
    const { id } = req.params;
    Subtitles.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Subtitle is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.subtitles_delete = (req, res) => {
    const { id } = req.params;
    Subtitles.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Subtitle is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.subtitles_post = async (req, res) => {
    const subtitle = req.body
    try {
        await Subtitles.create(subtitle)
        res.status(200).json({ message: "Subtitle is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.subtitles_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Subtitles.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Subtitle is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}