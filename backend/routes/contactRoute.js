const express = require("express")
const router = express.Router()

const contactController = require("../controllers/contactController")

router.get("/", contactController.contact_getAll)

router.get('/:id', contactController.contact_getAll_byId)

router.post("/", contactController.contact_post)

router.delete("/:id",contactController.contact_delete)

router.put("/:id", contactController.contact_put)

module.exports=router