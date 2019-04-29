const Cake = require('mongoose').model('Cake');
const Comment = require('mongoose').model('Comment')
const {Http} = require('@status/codes')

module.exports = {
    // all the cakes, scroll bar
    index(request, response){
      Cake.find({})
          .then(cakes => response.json(cakes))
          .catch(error => response.status(Http.InternalServerError).json(error))
    },
    //add a new cake
    create(request, response){
        Cake.create(request.body)
            .then(cake => response.json(cake))
            .catch(error =>{
                const errors = Object.keys(error.errors).map(key => error.errors(key).message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    // newComment(request, response){
    //     const {comment_id : commentId} = request.params;

    // },
    //show a particular cake
    show(request, response){
        const {cake_id: cakeId} = request.params;

        Cake.findById(cakeId)
            .then(cake => response.json(book))
            .catch(error => response.status(Http.UnprocessableEntity).json(error));
        }
    };
      