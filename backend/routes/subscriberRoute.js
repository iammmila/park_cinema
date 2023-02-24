const express = require("express")
const router = express.Router()

const subscriberController = require("../controllers/subscriberController")

router.get("/", subscriberController.subscriber_getAll)

router.get('/:id', subscriberController.subscriber_getAll_byId)

router.post("/", subscriberController.subscriber_post)

router.delete("/:id",subscriberController.subscriber_delete)

router.put("/:id", subscriberController.subscriber_put)

module.exports=router
