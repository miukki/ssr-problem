import HeaderBlock from './HeaderBlock'
import Link from 'next/link'
import React, {Component} from 'react'
import {Grid, ButtonBase} from '@material-ui/core'
import styled from 'styled-components'
import {mediaGrid} from '../utils/mediaGrid.js'
import {rem} from '../utils/mediaGrid.js'

import Footer from './Footer'
import Services from './Services'
import AboutUs from './AboutUs'
import Team from './Team'
import SubmitForm from './SubmitForm'
import Billboard from './Billboard'
import Article from './Article'
import Cards from './Cards'

const PageMain = ({
  stories,
  storyId,
  footerMenu = [],
  footerCopyright = {},
  menu,
  projects,
  aboutus,
  stopTimer,
  startTimer,
  members,
  membersTitle,
  introOne,
  introTwo,
  introThree,
  summary,
  social,
}) => {
  return (
    <>
      <HeaderBlock menu={menu} />{' '}
      <Billboard
        startTimer={startTimer}
        stopTimer={stopTimer}
        storyId={storyId}
        stories={stories}
        height={`440px`}
      />
      <Article textAlign={`center`} {...summary} margin={`8em 6em 0 6em`} />
      <Cards secondary="true" cards={summary.cards} />
      <Article {...introOne} margin={`8em 6em 0 6em`} />
      <Article
        {...introTwo}
        margin={`4em 0 0 0`}
        padding={`4em 6em 4em 6em`}
        background={`#fff`}
      />
      <Article {...introThree} margin={`4em 6em 0 6em`} />
      {/* <AboutUs aboutus={aboutus} title={`About Us`} /> */}
      {/* <Team members={members} title={membersTitle} />*/}
      <Services
        margin={`6em 6em 0 6em`}
        projects={projects}
        title={`How we can help.`}
      />
      <SubmitForm margin={`6em 6em 6em 6em`} />
    </>
  )
}

export default PageMain
