const express = require("express")
const router = express.Router()

const subtitlesController = require("../controllers/subtitlesController")

router.get("/", subtitlesController.subtitles_getAll)

router.get('/:id', subtitlesController.subtitles_getAll_byId)

router.post("/", subtitlesController.subtitles_post)

router.delete("/:id",subtitlesController.subtitles_delete)

router.put("/:id", subtitlesController.subtitles_put)

module.exports=router
