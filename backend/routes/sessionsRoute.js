const express = require("express")
const router = express.Router()

const sessionsController = require("../controllers/sessionsController")

router.get("/", sessionsController.sessions_getAll)

router.get('/:id', sessionsController.sessions_getAll_byId)

router.post("/", sessionsController.sessions_post)

router.delete("/:id",sessionsController.sessions_delete)

router.put("/:id", sessionsController.sessions_put)

module.exports=router
