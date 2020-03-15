require('dotenv').config()
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const sendgridApiKey = process.env.APIKEY
const receiver = process.env.RECEIVER

// //process.env.SENDGRID_API
const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: sendgridApiKey,
    },
  }),
)

const SendEmail = ({
  email,
  phone,
  company,
  name,
  text = 'A visitor to the website has requested to be added to the mailing list',
  subject = 'Simplimate Submit from Website',
}) => {
  const from = name && email ? `${name} <${email}>` : `${email}`
  const message = {
    from,
    to: receiver,
    subject: `${subject}, from: ${from}, company: ${company}`,
    text: `${text} , phone: ${phone}, email: ${email}, company: ${company}`,
    html: `<p>${text} , phone: ${phone}, email: ${email}, company: ${company}</p>`,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, resp) =>
      error ? reject(error) : resolve(resp),
    )
  })
}

module.exports = SendEmail
