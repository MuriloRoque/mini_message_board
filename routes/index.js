const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

/* GET new form. */
router.get('/new', (req, res) => {
  res.render('form', { title: 'New message' });
});

router.post('/new', (req, res) => {
  messages.push({text: req.body.text, user: req.body.user, added: new Date()});
  res.redirect('/')
})

module.exports = router;
