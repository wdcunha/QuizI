const express = require('express');
const router = express.Router();
const knex = require('../db');

// PATH: /clucks/new VERB: GET Serves form for creating clucks
router.get('/new', (request, response) => {
  response.render('clucks/new');
});

// localhost:7000/clucks/:id
router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex
    .first()
    .from('clucks')
    .where({id})  //{id} === {id: id}
    .then(post => {
      response.render('clucks/show',{post});
    })
    .catch(error => response.send(error));
});

// PATH: /clucks VERB: POST Creating new clucks
router.post('/', (request, response) => {
  const username = request.body.username;
  const content = request.body.content;
  const image_url = request.body.image_url;

  knex
    .insert({username, content, image_url})
    .into('clucks')
    .returning('id')
    .then(result => response.redirect('/clucks'))
    .catch(error => response.send(error));
});

// PATH: /clucks VERB: GET List all the clucks
router.get('/', (request, response) => {
  knex
    .select()
    .from('clucks')
    .orderBy('created_at', 'DESC')
    .then(clucks => {
      response.render('clucks/index', {clucks: clucks});
    });
})

module.exports = router;
