const { ProductService } = require('../services');

const getProducts = async(req, res) => {  
    //Get all products or products by category
    try {
        const { itemsPerPage, currentPage, category } = req.query;

        let filter = {};

        if ( category ) {
            filter = { 'category' : category };
        }

        const options = {
            limit: itemsPerPage ? parseInt(itemsPerPage, 10) : 10,
            page: currentPage ? parseInt(currentPage, 10) : 1,
        };

        const products = await ProductService.queryProducts(filter, options);
        
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const createProduct = async(req, res) => {
    try {
        // Get product details from request body
        const { name, category, price, description } = req.body;

        // Create a new product document
        const product = await ProductService.createProduct({
            name,
            category,
            price,
            description,
        });

        res.status(200).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

const getProduct = async(req, res) => {
    try {
        // Get product id from request param
        const { id } = req.params; // e.g. "123"

        //Get product by product id
        const product = await ProductService.getProduct(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getProducts, 
    createProduct,
    getProduct
}