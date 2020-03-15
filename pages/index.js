import React, {Component} from 'react'

import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import styled from 'styled-components'

import PageMain from '../components/PageMain.js'
import Backbone from '../components/Backbone.js'
import Footer from '../components/Footer.js'

const DELAY = 5
let idx = 0
let timer
//promise example
const delay = t =>
  new Promise(resolver => {
    timer = setTimeout(resolver, t)
    return timer
  })

const stopTimer = () => clearTimeout(timer)

async function bodyAsync(stories) {
  idx = idx + 1

  if (idx < stories.length) {
  } else {
    idx = 0
  }
  const {id} = stories[idx]

  return {id}
}

//Async way is more easy
async function demonStoryId({
  n,
  stories,
  isError = false,
  getRandomStoryId,
  storyId,
}) {
  while (!isError) {
    try {
      const {id} = await bodyAsync(stories, {idx: 0})
      getRandomStoryId(id)
      await delay(n * 1000)
    } catch (error) {
      isError = true
    }
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storyId: 0,
      ...props,
    }
    this.startTimer = this.startTimer.bind(this)
  }

  getRandomStoryId = storyId => this.setState({storyId})

  async startTimer(sec) {
    await delay(sec * 1000)

    demonStoryId({
      n: DELAY,
      stories: this.props.stories,
      getRandomStoryId: this.getRandomStoryId,
      storyId: this.state.storyId,
    })
  }

  componentDidMount() {
    stopTimer()
    demonStoryId({
      n: DELAY,
      stories: this.props.stories,
      getRandomStoryId: this.getRandomStoryId,
      storyId: this.state.storyId,
    })
  }

  componentWillUnmount() {
    stopTimer()
    console.log('componentWillUnmount')
  }

  render() {
    const {footerCopyright, footerMenu, social} = this.props
    return (
      <Backbone title={`Simplimate | A Digital Automation Company`}>
        <PageMain
          {...this.props}
          storyId={this.state.storyId}
          stopTimer={stopTimer}
          startTimer={this.startTimer}
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

Index.getInitialProps = async function() {
  const API = process.env.API
  const stringify = JSON.stringify({
    types: [
      'header',
      'stories',
      'footer',
      'aboutus',
      'projects',
      'members',
      'articles',
      'social',
    ],
  })
  const response = await fetch(`${API}/api/data`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: stringify,
  })

  let {
    header = {},
    stories = {},
    footer = {},
    aboutus = {},
    projects = {},
    members = {},
    articles = {},
    social = {},
  } = {
    ...(await response.json()),
  }

  return {
    ...header,
    ...stories,
    ...footer,
    ...aboutus,
    ...projects,
    ...members,
    ...articles,
    ...social,
    storyId: 0,
  }
}

export default Index
