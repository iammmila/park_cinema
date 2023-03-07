const express = require("express")
const router = express.Router()

const paymentController = require("../controllers/paymentController")

router.get("/", paymentController.payment_getAll)

router.get('/:id', paymentController.payment_getAll_byId)

router.post("/", paymentController.payment_post)

router.delete("/:id",paymentController.payment_delete)

router.put("/:id", paymentController.payment_put)

module.exports=router
