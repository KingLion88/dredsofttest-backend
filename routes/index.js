const express = require('express');
const router = express.Router();

const ProductRoute = require('./product.route');

const defaultRoutes = [
    {
        path: '/products',
        route: ProductRoute
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;