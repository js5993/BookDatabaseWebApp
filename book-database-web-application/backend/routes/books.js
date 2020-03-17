const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const bookName = req.body.bookName;
    const purchaseDate = Date.parse(req.body.purchaseDate);

    const newBook = new Book({
        bookName,
        purchaseDate,
    });

    newBook.save()
        .then( () => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;