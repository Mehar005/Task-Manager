const router = require('express').Router();
const Exercise = require('../models/exerciseModel')

//Api to create exercise
router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExe = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExe.save()
    .then(() => res.json('exercise added'))
    .then(err => res.status(404).json(err.message));

})

//Api to get single exercise 
router.get('/:id', (req, res) => {
    const id = req.params.id
    Exercise.findById(id)
    .then(result => res.json(result))
    .catch(error => res.status(404).json(error.message))
});

//Api to get all the exercises
router.get('/', (req, res) => {
    Exercise.find()
    .then(result => res.json(result))
    .catch(error => res.status(404).json(error.message))
});

//Api to update an exercise
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    Exercise.findById(id)
    .then(exercise => {
        exercise.username = req.body.username ? req.body.username : exercise.username;
        exercise.description = req.body.description ? req.body.description : exercise.description;
        exercise.duration = req.body.duration ? req.body.duration : exercise.duration;
        exercise.date = req.body.date ? req.body.date : exercise.date;

        exercise.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(404).json(err.message))
    })
    .catch(err => res.status(404).json(err.message))
});

//Api to delete an exercise
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Exercise.findByIdAndDelete(id)
    .then(() => res.json('exercise deleted'))
    .catch(err => res.status(404).json(err.message))
})


module.exports = router;
