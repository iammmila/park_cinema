const express = require("express")
const router = express.Router()

const filmsController = require("../controllers/filmsController")

router.get("/", filmsController.films_getAll)

router.get('/:id', filmsController.films_getAll_byId)

router.post("/", filmsController.films_post)

router.delete("/:id",filmsController.films_delete)

router.put("/:id", filmsController.films_put)

module.exports=router