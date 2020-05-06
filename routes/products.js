const router = require("express").Router();

router.get("/allproducts", (req, res) => {
    let products = [
        { id: 1, name: "roj"},
        { id: 2, name: "roj"},
        { id: 3, name: "roj"},
        { id: 4, name: "roj"}
    ]
    res.send(products)
});


module.exports = router;