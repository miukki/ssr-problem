import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React, {Component} from 'react'

import styled from 'styled-components'

// import PageContactUs from '../components/PageContactUs.js'
import Backbone from '../components/Backbone.js'
import Footer from '../components/Footer.js'

const PageContactUs = dynamic(() => import('../components/PageContactUs'), {
  ssr: false,
})

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {contactus, footerCopyright, footerMenu, social} = this.props
    const {banner, contacts} = contactus
    console.log('contactus', contactus)
    return (
      <Backbone title={`Simplimate: About`}>
        <PageContactUs
          {...this.props}
          content={contactus}
          contacts={contacts}
          banner={banner}
        />
        <Footer
          margin={`6em 0 0 0`}
          footerCopyright={footerCopyright}
          footerMenu={footerMenu}
          social={social}
        />{' '}
      </Backbone>
    )
  }
}

ContactUs.getInitialProps = async function() {
  const API = process.env.API
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      types: ['header', 'footer', 'articles', 'contactus', 'social'],
    }),
  })

  let {header = {}, footer = {}, articles = {}, contactus = {}, social = {}} = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...footer,
    ...articles,
    ...social,
    contactus,
  }
}

export default ContactUs
