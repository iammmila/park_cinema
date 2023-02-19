const Campaigns = require("../models/campaignsModel")

//! get element

exports.campaigns_getAll = (req, res) => {
    Campaigns.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! get element by id

exports.campaigns_getAll_byId = (req, res) => {
    const { id } = req.params;
    Campaigns.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            }
            else {
                res.status(400).json({ message: "Campaign is not found" })
            }
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! delete element by id

exports.campaigns_delete = (req, res) => {
    const { id } = req.params;
    Campaigns.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "Campaign is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
}

//! post element

exports.campaigns_post = async (req, res) => {
    const campaign = req.body
    try {
        await Campaigns.create(campaign)
        res.status(200).json({ message: "Campaign is posted" })
    } catch (error) {
        console.log(error)
    }
}

//! put element

exports.campaigns_put = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        await Campaigns.findByIdAndUpdate( id, data, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Campaign is not found' });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}