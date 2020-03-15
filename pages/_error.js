import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

class Error extends React.Component {
  render() {
    const {statusCode} = this.props
    return (
      <>
        <Head>
          <title>Simplimate</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <>
          Error:{' '}
          {statusCode ? ` ERROR ${statusCode}` : 'An error occurred on client'}
          <Link href="/">
            <a>home</a>
          </Link>
        </>

        <style jsx>{``}</style>
      </>
    )
  }
}

export default Error

Error.getInitialProps = async function({res, err}) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return {statusCode}
}
