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

const PageService = props => {
  const {
    footerMenu = [],
    footerCopyright = {},
    menu,
    articles = [],
    banner,
  } = props
  return (
    <>
      <HeaderBlock color={`#4A4A4A`} background={`transparent`} menu={menu} />
      <Billboard stories={[]} height={`240px`} banner={banner} />

      {articles.length > 0
        ? articles.map((article, index) => (
            <Article
              key={index}
              padding={`0 6em 4em 6em`}
              margin={`6em 0 0 0`}
              {...article}
            />
          ))
        : null}
    </>
  )
}

export default PageService
