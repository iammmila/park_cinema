const Sessions = require("../models/sessionsModel")

//! get element

exports.sessions_getAll = (req, res) => {
    Sessions.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.sessions_getAll_byId = (req, res) => {
    const { id } = req.params;
    Sessions.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Session is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.sessions_delete = (req, res) => {
    const { id } = req.params;
    Sessions.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Session is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.sessions_post = async (req, res) => {
    const session = req.body
    try {
        await Sessions.create(session)
        res.status(200).json({ message: "Session is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.sessions_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Sessions.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Session is not found' });
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}