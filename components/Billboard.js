import React, {Component} from 'react'
import posed from 'react-pose'
import {Grid, ButtonBase} from '@material-ui/core'
import styled from 'styled-components'
import ContainerAnimation from './ContainerAnimation.js'
import Poster from './Poster'
import {mediaGrid, rem} from '../utils/mediaGrid.js'
import {IconDot} from '../utils/icons.js'
import Link from 'next/link'

const A = {}
A.Link = styled.a`
  && {
    font-family: 'Gotham Light', sans-serif;
    display: inline-block;
    color: ${props => props.color};
    cursor: pointer;
    margin: 0;
    text-decoration: none;
    font-size: 1.15em;

    &:hover {
      opacity: 0.8;
    }
    a {
      font-size: 1.15em;
      font-family: 'Gotham Light', sans-serif;
      text-decoration: none;
    }
  }
`
const BlueButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1.15em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: #fff;
    background: rgb(0, 90, 144);
    font-weight: 600;
    margin: 3em auto 0;
    padding: ${rem(0)} ${rem(25)};
  }
`

const DottBlock = styled.div`
  && {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    width: 100px;
    margin: auto;
  }
`

const Dott = styled(IconDot)`
  && {
    z-index: 1;
    position: relative;
    display: inline-block;
    margin: 0 auto;
    cursor: pointer;
    opacity: ${({active}) => (active ? '1.0' : '0.5')};
  }
`

const Root = styled(Grid)`
  && {
    height: ${({height}) => height || 'auto'};
    background-color: #efefef;
    position: relative;
    margin-top: 100px;
  }
`

const Tagline = styled(Grid)`
  && {
    z-index: 1;
    height: ${({height}) => height || 'auto'};
  }
`

const Slogan = styled.div`
  && {
    z-index: 1;
    position: relative;
    text-align: center;
    font-size: 3.5em;
    white-space: nowrap;
    color: #fff;

    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;
  }
`

const Subslogan = styled.div`
  && {
    text-align: center;
    font-size: 1.7em;
    line-height: 1.321;
    font-family: 'Gotham Light', sans-serif;
    white-space: nowrap;
    margin-top: 1.5em;
    color: #fff;
  }
`

const Background = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  position: absolute;
`

const Row = styled(Grid)`
  && {
    text-align: center;
    position: relative;
    z-index: 1;
    height: ${({height}) => height || 'auto'};
  }
`

const ImageFilter = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #000;
  filter: brightness(${({brightness}) => brightness || '100%'});

  ${mediaGrid(`xl`)} {
    background-size: auto auto;
    @media only screen and (orientation: portrait) {
      background-size: auto 100%;
    }
  }
  ${mediaGrid(`lg`)} {
    background-size: auto auto;
    @media only screen and (orientation: portrait) {
      background-size: auto 100%;
    }
  }
  ${mediaGrid(`md`)} {
    background-size: auto auto;
  }
  ${mediaGrid(`sm`)} {
    background-size: auto auto;
  }
`

const StyledBg = styled(
  posed.div({
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  }),
)`
  height: ${({height}) => height || 'auto'};
  width: 100%;
  position: absolute;
  background: #000;
`
const Banner = ({height, brightness, url, slogan}) => (
  <StyledBg height={height} pose={`show`} spacing={0}>
    <ImageFilter
      brightness={brightness}
      style={{backgroundImage: `url(${url})`}}
    />
    <Tagline
      height={height}
      container
      alignItems="center"
      justify="space-between"
    >
      <Row item xs={12} sm={12} md={12} height={`auto`}>
        <Slogan
          dangerouslySetInnerHTML={{
            __html: slogan,
          }}
        />
      </Row>
    </Tagline>
  </StyledBg>
)
const BgList = ({
  stories = [],
  storyId = 0,
  stopTimer,
  startTimer,
  height,
  banner = {},
}) => {
  const [isStopped, setStop] = React.useState(false)
  const [storyIdLocal, setStoryId] = React.useState(storyId)

  return stories.length > 0 ? (
    stories.map(({id, url, slogan, subslogan, button, brightness}, index) => {
      return (
        <StyledBg
          height={height}
          key={index}
          pose={
            (isStopped && storyIdLocal === id) || (!isStopped && storyId === id)
              ? `show`
              : `hide`
          }
          spacing={0}
        >
          <ImageFilter
            brightness={brightness}
            style={{backgroundImage: `url(${url})`}}
          />
          <Tagline
            height={`400px`}
            container
            alignItems="center"
            justify="space-between"
          >
            {/* center */}
            <Row item xs={12} sm={12} md={12} height={`auto`}>
              <Slogan
                dangerouslySetInnerHTML={{
                  __html: slogan,
                }}
              />
              <Subslogan
                dangerouslySetInnerHTML={{
                  __html: subslogan,
                }}
              />
              {button ? (
                <BlueButton>
                  <Link as={`${button.url}`} href={`${button.url}`}>
                    <A.Link color={`#fff`}>{button.title}</A.Link>
                  </Link>
                </BlueButton>
              ) : null}
            </Row>
          </Tagline>

          {stories.length > 0 ? (
            <DottBlock>
              {Array.apply(0, Array(stories.length)).map((i, idx) => (
                <Dott
                  key={idx}
                  active={idx === index}
                  onClick={() => {
                    stopTimer()
                    setStop(true)
                    setStoryId(idx)
                    startTimer(5)
                    setTimeout(() => setStop(false), 5000)
                  }}
                />
              ))}
            </DottBlock>
          ) : null}
        </StyledBg>
      )
    })
  ) : (
    <Banner {...banner} height={height} />
  )
}

class Billboard extends Component {
  render() {
    const {
      stories,
      banner = {},
      height = '440px',
      storyId,
      stopTimer,
      startTimer,
    } = this.props
    return (
      <Root height={height} container justify="center" spacing={0}>
        <Grid item xs={12}>
          <ContainerAnimation isShow={true} width={`100vw`} pose={`default`}>
            <Background>
              <BgList
                banner={banner}
                height={height}
                stories={stories}
                storyId={storyId}
                stopTimer={stopTimer}
                startTimer={startTimer}
              />
            </Background>{' '}
          </ContainerAnimation>
        </Grid>
      </Root>
    )
  }
}

export default Billboard
