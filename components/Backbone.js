import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React, {Component} from 'react'

class Backbone extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {children, title = 'Simplimate'} = this.props
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />

          <style global jsx>{``}</style>
        </Head>

        {children}
      </>
    )
  }
}

export default Backbone
