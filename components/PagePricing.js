import HeaderBlock from './HeaderBlock'
import Link from 'next/link'
import React, {Component} from 'react'
import {Grid, ButtonBase, Typography} from '@material-ui/core'
import styled from 'styled-components'
import ContainerAnimation from './ContainerAnimation.js'
import posed from 'react-pose'
import {mediaGrid} from '../utils/mediaGrid.js'
import {rem} from '../utils/mediaGrid.js'

import {IconDot} from '../utils/icons.js'

import Footer from './Footer'
import Article from './Article'
import Billboard from './Billboard'
import ContactUsForm from './ContactUsForm'

const A = {}

A.Root = styled(Grid)`
  && {
    background-color: #fff;
  }
`

const PageContactUs = props => {
  const {menu, content, contacts, banner} = props
  return (
    <>
      <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />

      <Billboard stories={[]} height={`240px`} banner={banner} />
      <Article
        textAlign={content.textAlign}
        padding={`4em 6em 4em 6em`}
        margin={`0 0 0 0`}
        {...content}
      />

      {/* <ContactUsForm
        textAlign={`center`}
        margin={`6em 6em 6em 6em`}
        title={`Please fill the form`}
        subtitle={null}
        width={`50%`}
      /> */}

      <Grid container spacing={0}>
        <Grid item xs={10} sm={6}>
          <ContactUsForm
            textAlign={`left`}
            title={`Get in touch with our team`}
            subtitle={`Fill out the light form and we will get back to you as soon as possible`}
            margin={`5em 0 0 6em`}
            width={`100%`}
          />
        </Grid>
        <Grid item xs={10} sm={6}>
          {' '}
          <Article padding={`0 0 0 0`} margin={`5em 0 0 5em`} {...contacts} />
        </Grid>
      </Grid>
    </>
  )
}

export default PageContactUs
