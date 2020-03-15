import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {Grid, ButtonBase} from '@material-ui/core'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import {mediaGrid} from '../utils/mediaGrid.js'

const Paragraph = styled(Typography)`
  && {
    font-weight: 300;
    font-size: 1.2em;
    letter-spacing: normal;
    color: ${({colortext}) => colortext || '#1f231f'};
    line-height: 2;
    padding: 0;
  }
`

const SubTitle = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 2em;
    color: #003a53;
    letter-spacing: normal;
    margin: 0;
  }
`
const CustomGrid = styled(Grid)`
  && {
    height: ${({height}) => height || '100%'};
    /*
        ${mediaGrid(`xl`)} {
      @media only screen and (orientation: portrait) {
      }
    }
    ${mediaGrid(`lg`)} {
      @media only screen and (orientation: portrait) {
      }
    }
    */
    ${mediaGrid(`md`)} {
      height: auto;
    }
    ${mediaGrid(`sm`)} {
      height: auto;
    }
  }
`

const Root = styled.div`
  && {
    height: auto;
    padding-top: 2em;
    margin-bottom: 1em;

    ${mediaGrid(`md`)} {
      height: auto;
    }

    ${mediaGrid(`sm`)} {
      height: auto;
    }
  }
`
const ParagraphCustom = styled(Paragraph)`
  && {
    font-size: 11px;
    line-height: 2;
    letter-spacing: 0.33px;
    padding: 0;
    margin: 0;
  }
`

const TitleIcon = styled(Typography)`
  && {
    font-size: 1.125em;
    font-weight: normal;
    letter-spacing: 0.33px;
    color: #003a53;
  }
`

const BlueButton = styled(ButtonBase)`
  && {
    height: 44px;
    font-size: 1em;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: ${({color}) => color || '#fff'};
    background: #003a53;
    text-transform: uppercase;
    min-width: 200px;
    letter-spacing: 0.33px;
    margin: 1.5em auto;
  }
`

const Main = styled(Grid)`
  && {
    margin-top: 1em;
  }
`

const AboutContext = ({title, id = 0, description, button}) => {
  return (
    <>
      <TitleIcon align="center" gutterBottom variant="h5" component="h2">
        <Link as={`/aboutus`} href={`/project?id=${0}`}>
          <a>{title}</a>
        </Link>
      </TitleIcon>
      <ParagraphCustom align="center" paragraph>
        {description}
      </ParagraphCustom>
      {button ? (
        <BlueButton align="center" variant="h5" component="h5">
          {button}
        </BlueButton>
      ) : null}
      <style jsx>{`
        a {
          text-decoration: none;
          color: #003a53;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  )
}

const AboutUs = ({title, aboutus}) => (
  <Root>
    <SubTitle component="h2" variant="h2" align="center" gutterBottom>
      {title}
    </SubTitle>

    <Main
      container
      direction="column"
      justify="center"
      alignItems="center"
      height="auto"
    >
      <Grid item xs={10} sm={10} md={10} style={{textAlign: 'center'}}>
        <AboutContext {...aboutus} />
      </Grid>
    </Main>
  </Root>
)

export default AboutUs
