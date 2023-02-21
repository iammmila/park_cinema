const express = require("express")
const router = express.Router()

const formatsController = require("../controllers/formatsController")

router.get("/", formatsController.formats_getAll)

router.get('/:id', formatsController.formats_getAll_byId)

router.post("/", formatsController.formats_post)

router.delete("/:id",formatsController.formats_delete)

router.put("/:id", formatsController.formats_put)

module.exports=router
