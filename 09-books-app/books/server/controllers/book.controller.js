const Book = require('mongoose').model('Book');
const {Http} = require('@status/codes');

module.exports = {
    index(_request, response){
        Book.find({})
            .then(books => response.json(books))
            .catch(error => response.status(Http.InternalServerError).json(error))
    },
    create(request, response){
        Book.create(request.body)
            .then(book => response.json(book))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    show(request, response){
        const {book_id: bookId} = request.params;
        Book.findById(bookId)
            .then(book => response.json(book))
            .catch(error => response.status(Http.UnavailableForLegalReasons).json(error))
    },
    update(request, response){
        const {book_id: bookId} = request.params;
        Book.findByIdAndUpdate(bookId, request.body, {new: true})
            .then(book => response.json(book))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    destroy(request, response){
        const {book_id: bookId} = request.params;
        Book.findByIdAndRemove(bookId)
            .then(book => response.json(book))
            .catch(error => response.status(Http.ResetContent).json(error))
    },    
};