import {Grid} from '@material-ui/core'

import React, {Component} from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const Root = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: ${({width}) => width || 'auto'};
  height: 100%;
  display: ${({block}) => block || 'auto'};
`

const ContentAnimation = styled(
  posed.div({
    default: {
      x: `0`,
    },
    left: {
      x: `-1%`,
      left: 0,
      transition: {
        duration: 400,
        ease: 'linear',
      },
    },
  }),
)`
  height: 100%;
`

const ContainerAnimation = props => {
  const {children, pose, isShow, width} = props
  //pose = default || left
  return (
    <Root block={isShow ? `block` : `none`} width={width}>
      <ContentAnimation pose={pose}>{children}</ContentAnimation>
    </Root>
  )
}

export default ContainerAnimation
