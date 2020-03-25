// routes/api/pins.js

const express = require("express");
const router = express.Router();

// Load Pin model
const Pin = require("../../models/Pin"); // @route GET api/pins // @description Get all pins // @access Public

router.get("/pins/", (req, res) => {
  Pin.find()
    .then(pins => res.json(pins))
    .catch(err => res.status(404).json({ nopins: "No pins found" }));
});

// @route GET api/pins/:id
// @description Get single book by id
// @access Public
router.get("/pins/:id", (req, res) => {
  Pin.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: "No Pin found" }));
});

// @route GET api/pins
// @description add/save book
// @access Public
router.post("/pins/", (req, res) => {
  const newPin = new Pin(req.body);
  newPin
    .save()
    .then(pin => res.json(pin))
    .catch(err => res.status(400).json({ error: err }));
});

// @route GET api/pins/:id
// @description Update book
// @access Public
router.put("/pins/:id", (req, res) => {
  Pin.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: "Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/pins/:id
// @description Delete book by id
// @access Public
router.delete("/pins/:id", (req, res) => {
  Pin.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: "Pin entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a book" }));
});

module.exports = router;
