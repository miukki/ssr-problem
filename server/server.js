const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: '.'})
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')

const SendEmail = require('./sendgrid-mailer.js')

const DATA_HEADER = require('../json/header.json')
const DATA_STORIES = require('../json/stories.json')
const DATA_FOOTER = require('../json/footer.json')
const DATA_PROJECTS = require('../json/projects.json')
const DATA_MEMBERS = require('../json/members.json')
const DATA_ARTICLES = require('../json/articles.json')
const DATA_SOCIAL = require('../json/social.json')
const DATA_CONTACTUS = require('../json/contactus.json')
const DATA_SERVICES = require('../json/services.json')
app
  .prepare()
  .then(() => {
    const server = express()

    //maping url
    // server.get('/project/:id', (req, res) => {
    //   const actualPage = '/project'
    //   const queryParams = {id: req.params.id, title: req.params.id}
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/test/:id', (req, res) => {
    //   const actualPage = '/mytest'
    //   const queryParams = {title: req.params.id}
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.use(bodyParser.json())

    server.get('*', (req, res) => {
      // console.log('req', req);
      return handle(req, res)
    })

    server.post('/api/submit', (req, res) => {
      const {
        email = '',
        phone = '',
        message = '',
        company = '',
        subject = '',
      } = req.body
      console.log('req.body!', req.body)

      SendEmail({email, phone, company, text: message, subject})
        .then(resp => {
          console.log('resp success', resp)
          res.send(resp)
        })
        .catch(error => {
          console.log('error', error)
          res.send(error)
        })

      // res.send('success')
    })

    server.post('/api/data', (req, res) => {
      const {types} = req.body
      const output = {}

      if (Array.isArray(types)) {
        types.reduce((acc, type) => {
          acc[type] =
            type === 'header'
              ? {...DATA_HEADER}
              : type === 'stories'
              ? {...DATA_STORIES}
              : type === 'footer'
              ? {...DATA_FOOTER}
              : type === 'projects'
              ? {...DATA_PROJECTS}
              : type === 'members'
              ? {...DATA_MEMBERS}
              : type === 'contactus'
              ? {...DATA_CONTACTUS}
              : type === 'articles'
              ? {...DATA_ARTICLES}
              : type === 'social'
              ? {...DATA_SOCIAL}
              : type === 'services'
              ? {...DATA_SERVICES}
              : {}
          return acc
        }, output)
      }

      res.send({...output})
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    console.error('Server Error', ex.stack)
    process.exit(1)
  })
