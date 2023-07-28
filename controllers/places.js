const router = require('express').Router()
const db = require('../models')

//GET INDEX page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/comment', (req, res) => {

    if (req.body.rant) {
      req.body.rant = true
    } 
    else {
      req.body.rant = false
    }
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
          .catch(err => {
            console.log(err)
            res.render('error404')
        })
      })
      .catch(err => {
        console.log(err)
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})



router.delete('/:id/comment/:commentId', (req, res) => {
    res.send('GET /places/:id/comment/:commentId stub')
})

module.exports = router
