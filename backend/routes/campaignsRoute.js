const express = require("express")
const router = express.Router()

const campaignsController = require("../controllers/campaignsController")

router.get("/", campaignsController.campaigns_getAll)

router.get('/:id', campaignsController.campaigns_getAll_byId)

router.post("/", campaignsController.campaigns_post)

router.delete("/:id",campaignsController.campaigns_delete)

router.put("/:id", campaignsController.campaigns_put)

module.exports=router