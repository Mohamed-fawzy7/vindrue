const router = require("express").Router();

router.get("/allproducts", (req, res) => {
    let imgPath = 'https://media.istockphoto.com/photos/makeup-powder-and-brushes-on-white-wood-flat-lay-picture-id666644290?k=6&m=666644290&s=612x612&w=0&h=TP6v6uaYUx-B6syCIx4dbqfYoa6KUyXde1Zolf5nt4Q=';
    let products = [
        { id: 1, name: 'product-1', imgPath, price: 15, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 2, name: 'product-2', imgPath, price: 25, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 3, name: 'product-3', imgPath, price: 35, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 4, name: 'product-4', imgPath, price: 45, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 5, name: 'product-5', imgPath, price: 55, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 6, name: 'product-6', imgPath, price: 65, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 7, name: 'product-7', imgPath, price: 75, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 8, name: 'product-8', imgPath, price: 85, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 9, name: 'product-9', imgPath, price: 95, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 10, name: 'product-10', imgPath, price: 10, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 11, name: 'product-11', imgPath, price: 11, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 12, name: 'product-12', imgPath, price: 12, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 13, name: 'product-13', imgPath, price: 13, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 14, name: 'product-14', imgPath, price: 14, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 15, name: 'product-15', imgPath, price: 15, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 16, name: 'product-16', imgPath, price: 16, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 17, name: 'product-17', imgPath, price: 17, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 18, name: 'product-18', imgPath, price: 18, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 19, name: 'product-19', imgPath, price: 19, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
        { id: 20, name: 'product-20', imgPath, price: 20, isNew: true, description: 'lorem ipsum lorem cosmeteics' },
    ]


    // t3adeeeeeeeeeeeeeeeeeeeeeeeeeeel
    res.send(products);
});


module.exports = router;