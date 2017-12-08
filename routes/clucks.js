const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const knex = require('../db');

const UPLOADS_DIR = 'uploads';
const upload = multer({dest: path.join(__dirname, '..', 'public', UPLOADS_DIR)});

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
    .then(cluck => {
      response.render('clucks/show',{cluck});
    })
    .catch(error => response.send(error));
});

// PATH: /clucks VERB: POST Creating new clucks
router.post('/', upload.single('picture'), (request, response) => {
  const username = request.body.username;
  const content = request.body.content;
  // const image_url = request.body.image_url;

  const filename = request.file.filename;
  const image_url = path.join(UPLOADS_DIR, filename);

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
