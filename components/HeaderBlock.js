import {Grid, Button, ButtonBase} from '@material-ui/core'
import styled from 'styled-components'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import {rem, mediaGrid} from '../utils/mediaGrid.js'
import {Logo} from '../utils/icons.js'

const A = {}
A.LogoBlock = styled(Grid)`
  && {
    text-align: left;
    height: 100px;
    svg {
      font-size: 14em;
      top: -60px;
      position: relative;
    }

    ${mediaGrid(`md`)} {
      text-align: left;
      height: 100px;
      svg {
        font-size: 14em;
      }
    }
    ${mediaGrid(`sm`)} {
      text-align: center;
      height: 100px;
      svg {
        font-size: 14em;
      }
    }
  }
`
A.MenuWrap = styled(Grid)`
  && {
    margin-right: 6em;
    justify-content: space-between;

    ${mediaGrid(`md`)} {
      height: auto;
      justify-content: center;
    }
    ${mediaGrid(`sm`)} {
      height: auto;
      justify-content: center;
    }
  }
`

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
A.Logo = styled(Logo)``
A.Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 100px;
  width: 100%;
  z-index: 1;
  padding: 0 6em;
`
A.Header = styled(Grid)``
const BlueButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    font-weight: 600;
    padding: ${rem(0)} ${rem(25)};
    background: rgb(0, 90, 144);
    border: 3px solid transparent;
    color: #fff;
  }
`

const HeaderBlock = ({menu, color, background}) => (
  <A.Root>
    <A.Header
      container
      alignItems="center"
      direction="row"
      justify="space-between"
      spacing={0}
      background={background}
    >
      <A.LogoBlock item xs={12} sm={2} md={4}>
        <Link as={`${'/'}`} href={`${'/'}`}>
          <a>
            <A.Logo />
          </a>
        </Link>
      </A.LogoBlock>
      <Grid item xs={12} sm={8} md={6}>
        {/* spacing one of [0,8,16,24,32,40]. */}
        <A.MenuWrap
          container
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          {menu.map(({title, url, type}, index) => (
            <Grid key={index} item>
              {type === 'primary' ? (
                <BlueButton align="center" variant="h5" component="h5">
                  <Link as={`${url}`} href={`${url}`}>
                    <A.Link color={`#fff`}>{title}</A.Link>
                  </Link>
                </BlueButton>
              ) : url && type !== 'primary' ? (
                <Link as={`${url}`} href={`${url}`}>
                  <A.Link color={`rgb(0,90,144)`}>{title}</A.Link>
                </Link>
              ) : null}
            </Grid>
          ))}
        </A.MenuWrap>
      </Grid>
    </A.Header>
  </A.Root>
)

export default HeaderBlock
