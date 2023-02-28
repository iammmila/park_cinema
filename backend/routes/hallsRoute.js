const express = require("express")
const router = express.Router()

const hallsController = require("../controllers/hallsController")

router.get("/", hallsController.halls_getAll)

router.get('/:id', hallsController.halls_getAll_byId)

router.post("/", hallsController.halls_post)

router.delete("/:id",hallsController.halls_delete)

router.put("/:id", hallsController.halls_put)

module.exports=router
