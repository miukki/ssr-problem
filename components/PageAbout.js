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

const A = {}

A.Root = styled(Grid)`
  && {
    background-color: #fff;
  }
`

const PageAbout = props => {
  const {menu, article} = props
  const {banner} = article
  console.log('article', article)
  return (
    <>
      <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />

      <Billboard stories={[]} height={`240px`} banner={banner} />

      <Article
        textAlign={`center`}
        padding={`4em 6em 4em 6em`}
        margin={`0em 0 0 0`}
        {...article}
      />
    </>
  )
}

export default PageAbout
