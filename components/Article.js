import styled from 'styled-components'
import {Grid, ButtonBase, Button, Typography} from '@material-ui/core'
import {mediaGrid, rem} from '../utils/mediaGrid.js'
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
const OutlinedButton = styled(ButtonBase)`
  && {
    font-family: 'Gotham Medium', sans-serif;
    height: 46px;
    font-size: 1.15em;
    font-style: normal;
    font-stretch: normal;
    text-align: center;
    color: rgb(0, 90, 144);
    border: 3px solid rgb(0, 90, 144);
    font-weight: 600;
    padding: ${rem(0)} ${rem(25)};
  }
`

const ButtonBlock = styled.div`
  && {
    button {
      margin: 1em auto 0 1em;
      &:first-child {
        margin: 1em auto 0 0;
      }
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
    font-weight: 600;
    padding: ${rem(0)} ${rem(25)};
    background: rgb(0, 90, 144);
    border: 3px solid transparent;
    color: #fff;
  }
`

A.Subtitle = styled.div`
  && {
    font-size: 1.5em;
    line-height: 1.321;
    color: rgb(0, 0, 0);
    font-family: 'Gotham Light', sans-serif;
    text-align: ${({textAlign}) => textAlign || 'left'};
    margin: ${({margin}) => margin || '2em auto'};
  }
`

A.Title = styled.div`
  && {
    color: rgba(0, 0, 0, 0.9);

    font-weight: 500;
    font-size: 3em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;
    text-align: ${({textAlign}) => textAlign || 'left'};

    margin-bottom: 1em;
  }
`

A.Image = styled.img`
  height: auto;
  margin: auto;
  width: 100%;

  ${mediaGrid(`xl`)} {
    width: 100%;
  }

  ${mediaGrid(`lg`)} {
    width: 100%;
  }

  ${mediaGrid(`md`)} {
    width: 100%;
  }

  ${mediaGrid(`sm`)} {
    width: 100%;
    margin: 2em auto;
  }
`

A.Body = styled.div`
  && {
    text-align: ${({img, textAlign}) =>
      !img && textAlign === 'center' ? 'center' : 'left'};
    margin: ${({direction, img}) =>
      !img
        ? `0 0 0 0`
        : direction === `row-reverse`
        ? `0 5em 0 0`
        : `0 0 0 5em`};
    p {
      font-family: 'Gotham Light', sans-serif;
      font-size: 1.2em;
      line-height: 1.4;
      margin: 1em 0;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`
A.Root = styled.div`
  && {
    margin: ${({margin}) => margin || `0`};
    padding: ${({padding}) => padding || `0`};
    background-color: ${({background}) => background || `transparent`};
  }
`
A.Content = styled(Grid)`
  && {
    color: #9b9b9b;
    font-size: 0.9em;
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

  }
`
const Article = ({
  title,
  subtitle,
  html,
  direction = 'row',
  img,
  spacing = 0,
  margin = 0,
  buttons = [],
  background,
  padding,
  textAlign = `left`,
}) => (
  <A.Root margin={margin} padding={padding} background={background}>
    <A.Content
      container
      alignItems="flex-start"
      direction={direction}
      justify="space-between"
      spacing={spacing}
    >
      {/* left */}
      {img ? (
        <Grid item xs={12} sm={6}>
          <A.Image src={img} />
        </Grid>
      ) : null}
      {/* center */}
      <Grid item xs={12} sm={img ? 6 : 12}>
        <A.Body img={img} direction={direction} textAlign={textAlign}>
          {title ? <A.Title textAlign={textAlign}>{title}</A.Title> : null}
          {subtitle ? (
            <A.Subtitle
              textAlign={textAlign}
              margin={!title ? `0 auto 2em auto` : `2em auto`}
            >
              {' '}
              <div
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              />
            </A.Subtitle>
          ) : null}

          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          {buttons.length > 0 ? (
            <ButtonBlock>
              {buttons.map((button, index) =>
                button.style === `blue` ? (
                  <BlueButton key={index}>
                    <Link as={`${button.url}`} href={`${button.url}`}>
                      <A.Link color={`#fff`}>{button.title}</A.Link>
                    </Link>
                  </BlueButton>
                ) : (
                  <OutlinedButton key={index}>
                    <Link as={`${button.url}`} href={`${button.url}`}>
                      <A.Link color={`rgb(0, 90, 144)`}>{button.title}</A.Link>
                    </Link>
                  </OutlinedButton>
                ),
              )}
            </ButtonBlock>
          ) : null}
        </A.Body>
      </Grid>
      <style jsx>{``}</style>
    </A.Content>
  </A.Root>
)
export default Article
