const { Router } = require("express");
const router = Router();

const userRoute = require("./userRoute");
const categoryRoute = require('./categoryRoute')
const subcategoryRoute = require('./subcategoryRoute')
const productRoute = require('./productRoute')

router.use("/user", userRoute);
router.use('/category', categoryRoute)
router.use('/subcategory', subcategoryRoute)
router.use('/product', productRoute)


module.exports = router;