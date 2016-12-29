// client
const next = require('next')
const client = next({ dir: '.', dev: process.env.NODE_ENV === 'development' })
const handle = client.getRequestHandler()

// api
if(process.env.NODE_ENV === 'development') require('dotenv').load()
const { thinky, r, type, m } = require('../climate-models/thinky')
const { Campaign, Competition, Email, Part, Review, Submission, Training, User } = require('../climate-models')
const server = require('../climate-feathers-api')([ 'users', 'reviews', 'submissions' ])
const { loggedIn, hashPassword, isOwner, createdAt, updatedAt, disable, addUserId, filterByUser } = require('../climate-feathers-api/permissions')

client.prepare().then(() => {

  server

  // .get('/', function(req, res, next) {
  //   res.send('hello world')
  // })

  .get('/*', function(req, res) {
    return client.render(req, res, req.url, req.query)
  })

  .use(require('feathers-errors/handler')())
  .use(require('feathers-errors/not-found')())
  .listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))

})
