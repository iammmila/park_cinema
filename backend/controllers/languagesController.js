const Languages = require("../models/languagesModel")

//! get element

exports.languages_getAll = (req, res) => {
    Languages.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.languages_getAll_byId = (req, res) => {
    const { id } = req.params;
    Languages.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Language is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.languages_delete = (req, res) => {
    const { id } = req.params;
    Languages.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Language is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.languages_post = async (req, res) => {
    const language = req.body
    try {
        await Languages.create(language)
        res.status(200).json({ message: "Language is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.languages_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Languages.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Language is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}