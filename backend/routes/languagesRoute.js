const express = require("express")
const router = express.Router()

const languagesController = require("../controllers/languagesController")

router.get("/", languagesController.languages_getAll)

router.get('/:id', languagesController.languages_getAll_byId)

router.post("/", languagesController.languages_post)

router.delete("/:id",languagesController.languages_delete)

router.put("/:id", languagesController.languages_put)

module.exports=router
