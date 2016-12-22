// client
const next = require('next')
const client = next({ dir: '.', dev: true })
const handle = client.getRequestHandler()

// api
if(process.env.NODE_ENV === 'development') require('dotenv').load()
const { thinky, r, type, m } = require('../climate-models/thinky')
const { Campaign, Competition, Email, Part, Review, Submission, Training, User } = require('../climate-models')
const express = require('express')
const yields = require('express-yields')

client.prepare().then(() => {

  const server = express()

  server.get('*', function *(req, res) {
  // if token log user in
  //   if(this.user) {
  //     return client.render(this.resquest, this.response, this.url, this.query)
  //   } else {
      return client.render(req, res, '/login', req.query)
    // }
  })

  server.listen(process.env.PORT, e => {
    if(e) throw new Error(e)
    console.log('API on localhost:' + process.env.PORT)
  })

})
