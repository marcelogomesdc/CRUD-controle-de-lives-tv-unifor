const books = require("../Data/Books.json");
const user = require("../Data/User.json");

exports.post = (req, res, next) => {
  const body = {
    id: books.length + 1,
    image: req.body.image,
    title: req.body.title,
    author: req.body.author,
    status: req.body.status,
  };

  books.push(body);
  return res.json(body);
};

exports.put = (req, res, next) => {
  const item = books.find((item) => item.id === req.body.id);
  const index = books.indexOf(item);

  books[index] = req.body;
  res.json(req.body);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;

  const projectIndex = books.findIndex((p) => p.id == id);
  books.splice(projectIndex, 1);

  res.status(200).send();
};

exports.get = (req, res, next) => {
  res.status(200).send(books);
};

exports.getUser = (req, res, next) => {
  res.status(200).send(user);
};
