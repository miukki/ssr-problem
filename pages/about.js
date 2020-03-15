import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React, {Component} from 'react'

import styled from 'styled-components'

import PageAbout from '../components/PageAbout.js'
import Backbone from '../components/Backbone.js'
import Footer from '../components/Footer.js'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {about = {}, footerCopyright, footerMenu, social} = this.props
    return (
      <Backbone title={`Simplimate: About`}>
        <PageAbout {...this.props} article={about} />
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

About.getInitialProps = async function() {
  const API = process.env.API
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      types: ['header', 'footer', 'articles', 'social'],
    }),
  })

  let {header = {}, footer = {}, articles = {}, social = {}} = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...footer,
    ...articles,
    ...social,
  }
}

export default About
