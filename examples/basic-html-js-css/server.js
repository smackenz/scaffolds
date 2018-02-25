/**
 * Server
 */
"use strict"

const http = require('http')
const express = require('express')
const favicon = require('serve-favicon')

const port = process.env['PORT'] || 9999
const uri = `http://localhost:${PORT}`
const root = _.cwd('build')
const faviconpath =

const app = express()
const server = http.Server(app)


/**
 * Middleware
 */

 // Request logger
 function logger({ enabled=true }={}) {
  return (req, res, next) => {
    if(enabled) {
      console.log(`Request: ${req.url}`)
    }
    next()
  }
}

app.use(logger({ enabled: true }))
app.use(favicon(_.cwd('public', 'favicon.ico')))
app.use(express.static(root))

app.set('views', './build')
app.set('view engine', 'html')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})


/**
 * Connections
 */

// io.on('connection', function (socket) {
//   console.log('SOCKET CONNECTED')
//   // socket.emit('news', { hello: 'world' });
//   // socket.on('my other event', function (data) {
//   //   console.log(data);
//   // });
// });

/**
 * Start
 */

server.listen(PORT, () => {
  console.log(`Start: ${URI}`)
})