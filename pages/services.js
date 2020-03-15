import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React, {Component} from 'react'

import styled from 'styled-components'

import PageService from '../components/PageService.js'
import Backbone from '../components/Backbone.js'
import Footer from '../components/Footer.js'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {services = {}, footerCopyright, footerMenu, social} = this.props
    return (
      <Backbone title={`Simplimate: Services`}>
        <PageService {...services} {...this.props} />
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

Services.getInitialProps = async function() {
  const API = process.env.API
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      types: ['header', 'footer', 'services', 'social'],
    }),
  })

  let {header = {}, footer = {}, articles = {}, social = {}, services = {}} = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...footer,
    ...services,
    ...social,
  }
}

export default Services
