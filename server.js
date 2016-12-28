// client
const next = require('next')
const client = next({ dir: '.', dev: process.env.NODE_ENV === 'development' })
const handle = client.getRequestHandler()

// api
if(process.env.NODE_ENV === 'development') require('dotenv').load()
const { thinky, r, type, m } = require('../climate-models/thinky')
const { Campaign, Competition, Email, Part, Review, Submission, Training, User } = require('../climate-models')
const express = require('express')
const yields = require('express-yields')
const cookie = require('cookie-parser');
const session = require('express-session');
const RDBStore = require('express-session-rethinkdb')(session);

client.prepare().then(() => {

  const server = express()
  const rdbStore = new RDBStore({
    connection: r,
    table: 'session',
    sessionTimeout: 86400000,
    flushInterval: 60000,
    debug: false
  })

  server.use(cookie())
  server.use(session({
    key: 'climatetracker',
    secret: process.env.SECRET,
    cookie: { maxAge: 860000 },
    store: rdbStore,
    resave: false,
    saveUninitialized: false
  }))

  // server.use(function(req, res, next) {
  //   console.log('Cookies: ', req.session.user)
  //   next()
  // })

  server.get('/logout', function(req, res, next) {
    req.session.destroy(e => res.redirect('/'))
  })

  server.get('/login', function(req, res) {
    if(req.session.user) return res.redirect('/');
  })

  server.post('/login', function *() {
    console.log(req.body)

    //
    let user = yield User.get('0772850c-4291-43d4-ab91-c7d649452012')
    req.session.user = user.id
  })

  server.get('/*', function *(req, res) {
    return client.render(req, res, req.url, req.query)
  })

  server.listen(process.env.PORT, e => {
    if(e) throw new Error(e)
    console.log('API on localhost:' + process.env.PORT)
  })

})
