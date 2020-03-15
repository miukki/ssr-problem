import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React, {Component} from 'react'

import styled from 'styled-components'

// import PagePricing from '../components/PagePricing.js'
import Backbone from '../components/Backbone.js'
import Footer from '../components/Footer.js'
import Article from '../components/Article'

const PagePricing = dynamic(() => import('../components/PagePricing'), {
  ssr: false,
})

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      pricing = {},
      footerCopyright,
      footerMenu,
      social,
      contactus,
    } = this.props
    const {contacts} = contactus
    const {banner} = pricing
    return (
      <Backbone title={`Simplimate: About`}>
        <PagePricing
          {...this.props}
          content={pricing}
          contacts={contacts}
          {...pricing}
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
