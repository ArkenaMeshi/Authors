const Authors = require("../models/authors.model");

module.exports.createAuthor= (request, response) => {
  Authors.create(request.body)
    .then((author) => response.json(author))
    .catch((err) => response.status(300).json(err));
};

module.exports.getAllAuthors = (request, response) => {
  Authors.find({})
    .then((authors) => {
      console.log(authors);
      response.json(authors);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getAuthor= (request, response) => {
  Authors.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

module.exports.updateAuthors = (request, response) => {
  Authors.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updateAuthors => response.json(updateAuthors))
      .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
  Authors.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}