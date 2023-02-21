const express = require("express")
const router = express.Router()

const genresController = require("../controllers/genresController.js")

router.get("/", genresController.genres_getAll)

router.get('/:id', genresController.genres_getAll_byId)

router.post("/", genresController.genres_post)

router.delete("/:id",genresController.genres_delete)

router.put("/:id", genresController.genres_put)

module.exports=router