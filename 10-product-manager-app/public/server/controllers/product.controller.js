const Product = require('mongoose').model('Product');
const {Http} = require('@status/codes');

module.exports = {
    index(_request, response){
        Product.find({})
            .then(products => response.json(products))
            .catch(error => response.status(Http.InternalServerError).json(error))
    },
    create(request, response){
        Product.create(request.body)
            .then(product => response.json(product))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    show(request, response){
        const {product_id: productId} = request.params;
        Product.findById(productId)
            .then(product => response.json(product))
            .catch(error => response.status(Http.UnavailableForLegalReasons).json(error))
    },
    update(request, response){
        const {product_id: productId} = request.params;
        Product.findByIdAndUpdate(productId, request.body, {new: true})
            .then(product => response.json(product))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    destroy(request, response){
        const {product_id: productId} = request.params;
        Product.findByIdAndRemove(productId)
            .then(product => response.json(product))
            .catch(error => response.status(Http.ResetContent).json(error))
    },    
};