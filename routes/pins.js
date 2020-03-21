// routes/api/pins.js

const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/Book');

// @route GET api/pins
// @description Get all pins
// @access Public
router.get('/pins/', (req, res) => {
    Book.find()
        .then(pins => res.json(pins))
        .catch(err => res.status(404).json({ nopins: 'No pins found' }));
});

// @route GET api/pins/:id
// @description Get single book by id
// @access Public
router.get('/pins/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/pins
// @description add/save book
// @access Public
router.post('/pins/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/pins/:id
// @description Update book
// @access Public
router.put('/pins/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/pins/:id
// @description Delete book by id
// @access Public
router.delete('/pins/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;