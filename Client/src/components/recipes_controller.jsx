// Dependencies
const express = require('express');
const recipes = express.Router();


// Index
recipes.get('/', async (res, req) => {
    res.send('index', {
        title: 'Index Page'
    })
})

// New



// Show
recipes.get('/:id', (res, req) => {
    res.send('show')
})


// Edit
recipes.get('/:id/edit', (res, req) => {
    res.send('edit')
})

// Update

// Create

// Delete

