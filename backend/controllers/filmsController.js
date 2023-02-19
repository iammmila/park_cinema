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
// exports.featured_update = async (req, res) => {
//     try {
//         const example = await Featured.findByIdAndUpdate(req.params.id, req.body, { new: true });

//         if (!example) {
//             return res.status(404).json({ message: 'Featured not found' });
//         }
//         res.status(200).json(example);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
//! put element
exports.films_put = async (req, res) => {
    const data = req.body;
    try {
        await Films.findByIdAndUpdate(data._id, {
            name: data.name,
            ageLimit: data.ageLimit,
            durationMinute: data.durationMinute,
            country: data.country,
            director: data.director,
            actors: data.actors,
            description: data.description,
            trailer: data.trailer,
            poster: data.poster,
            date: data.date,
            genres: data.genres.name,
            languages: data.languages.name,
            formats: data.formats.name,
            subtitles: data.subtitles.name,
        });
        res.status(200).json({
            message: "film is updated",
        });
    } catch (err) {
        res.status(500).json({
            message: "film can't updated",
        });
    }
}