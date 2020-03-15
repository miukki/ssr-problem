import Link from 'next/link'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {mediaGrid, rem} from '../utils/mediaGrid.js'
import {FaLinkedin} from 'react-icons/fa'
import {LogoMini} from '../utils/icons.js'

const LogoMiniCustom = styled(LogoMini)`
  && {
    font-size: 4.2em;
    width: auto;
    margin-bottom: 10px;
  }
`
const LinkedInIcon = styled(FaLinkedin)`
  && {
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: -10px;
    cursor: pointer;
    font-size: 30px;
    margin-left: 3px;
  }
`
const Root = styled.div`
  && {
    margin: ${({margin}) => margin || `0`};
    height: ${({height}) => height || `40vh`};
    overflow: hidden;
    background: #262626;
    padding: 3em 6em 0;
    a {
      font-size: 0.9em;
      font-family: 'Gotham Light', sans-serif;
      text-decoration: none;
      white-space: nowrap;
      color: rgba(255, 255, 255, 1);
      display: block;
      padding: 0 0 1em 0;
      &:hover {
        text-decoration: underline;
      }
    }

    span {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.8em;
      text-decoration: none;
      white-space: nowrap;
      padding: 0.3em 0;
      display: block;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Block = styled(({...other}) => <Grid {...other} />)`
  && {
    height: ${props => props.height || `auto`};
  }
`

const Copy = styled(Grid)`
  && {
    text-align: right;
    font-size: 0.9em;
    font-family: 'Gotham Light', sans-serif;
    white-space: nowrap;
    line-height: 1.3;
    .row {
      margin-bottom: 0.3em;
    }
    ${mediaGrid(`md`)} {
      text-align: center;
    }

    ${mediaGrid(`sm`)} {
      text-align: center;
    }
  }
`
const Footer = ({footerMenu, margin, social = [], footerCopyright = {}}) => {
  const [linkedin = {}] = social.filter(item => item.icon === 'linkedin')
  return (
    <Root margin>
      <Block
        margin={margin}
        container
        direction="row"
        justify="center"
        spacing={0}
      >
        <Grid item xs={12} sm={9} md={9}>
          <Grid container spacing={0}>
            {footerMenu.map(({title, url, submenu}, index) => (
              <Grid item xs={6} sm={3} sm={3} key={index}>
                <Link as={`${url}`} href={`${url}`}>
                  <a>{title}</a>
                </Link>
                {submenu.map(({sub, url = '/#'}, idx) => (
                  <Link as={`${url}`} href={`${url}`} key={idx}>
                    <span>{sub}</span>
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Copy item xs={12} sm={3} md={3}>
          <LogoMiniCustom />
          <div className="row">{footerCopyright.html}</div>
          <div
            dangerouslySetInnerHTML={{
              __html: footerCopyright.contact,
            }}
          />
          <div className="row">
            {linkedin.text}
            <Link as={`${linkedin.url}`} href={`${linkedin.url}`}>
              <a target="_blank">
                <LinkedInIcon />
              </a>
            </Link>
          </div>
        </Copy>
      </Block>
    </Root>
  )
}

export default Footer
