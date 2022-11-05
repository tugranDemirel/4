const Product = require('../models/product')

module.exports.getIndex = (req, res, next) =>{
    const products = Product.getAll();
    res.render('shop/index', {
        title: 'Shopping',
        products: products,
        path: '/'
    })
}

module.exports.getProducts = (req, res, next) =>{
    res.render('shop/products', {
        title: 'Products',
        path: '/'
    })
}

module.exports.getProductDetails = (req, res, next) =>{
    res.render('shop/details', {
        title: 'Details',
        path: '/details'
    })
}

module.exports.getCart = (req, res, next) =>{
    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    })
}

module.exports.getOrders = (req, res, next) =>{
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    })
}
