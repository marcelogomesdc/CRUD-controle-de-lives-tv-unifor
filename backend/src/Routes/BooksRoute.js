const BooksController = require("../Controllers/BooksController");

module.exports = (app) => {
  app.post("/book", BooksController.post);
  app.put("/book/:id", BooksController.put);
  app.delete("/book/:id", BooksController.delete);
  app.get("/books", BooksController.get);
  app.get("/user", BooksController.getUser);
};
