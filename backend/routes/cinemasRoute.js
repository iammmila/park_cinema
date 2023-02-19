const express = require("express")
const router = express.Router()

const cinemasController = require("../controllers/cinemasController")

router.get("/", cinemasController.cinemas_getAll)

router.get('/:id', cinemasController.cinemas_getAll_byId)

router.post("/", cinemasController.cinemas_post)

router.delete("/:id",cinemasController.cinemas_delete)

router.put("/:id", cinemasController.cinemas_put)

module.exports=router