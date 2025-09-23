const config = {
    appName: 'Product Hub',
    version: '1.0.0',
    port: 3000,
    db : {
        host: 'localhost',
        user: 'admin',
        password: 'password',
        database: 'product_hub_db'
    },
    apiEndpoints: {
        getProducts: '/api/products',
        getProductById: '/api/products/:id',
        createProduct: '/api/products',
        updateProduct: '/api/products/:id',
        deleteProduct: '/api/products/:id'
    }
};

module.exports =  config;