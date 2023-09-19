const AuthorsController = require("../controllers/authors.controller");

module.exports = (app) => {
  app.post("/authors", AuthorsController.createAuthor);
  app.get("/authors", AuthorsController.getAllAuthors);
  app.get("/authors/:id", AuthorsController.getAuthor);
  app.patch('/authors/:id', AuthorsController.updateAuthors);
  app.delete('/authors/:id', AuthorsController.deleteAuthor);
}