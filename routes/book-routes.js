const express = require("express");
const router = express.Router();
const book = require("../model/book");
const booksController = require("../controllers/books-controller");


router.get('/', booksController.getAllBooks);

module.exports = router; 