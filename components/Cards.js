import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {Grid, ButtonBase, Card, CardContent} from '@material-ui/core'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import {mediaGrid, rem} from '../utils/mediaGrid.js'

const Root = styled.div`
  && {
    background: ${({secondary}) =>
      secondary === 'true' ? `#f3f3f3ff` : `none`};
    padding: ${({secondary}) => (secondary === 'true' ? `0 5em 0 5em` : `0`)};
  }
`

const Paragraph = styled(Typography)`
  && {
    font-weight: 300;
    font-size: 13px;
    letter-spacing: normal;
    color: ${({colortext}) => colortext || '#1f231f'};
    line-height: 2;
    padding: 35px 0;
  }
`
const CardStyled = styled(Card)`
  && {
    height: ${({secondary}) => (secondary === 'true' ? `auto` : `60vh`)};
    background: ${({secondary}) =>
      secondary === 'true' ? `#f3f3f3ff` : `none`};

    border-radius: ${({secondary}) => (secondary === 'true' ? `0` : `4px`)};
    box-shadow: ${({secondary}) =>
      secondary === 'true'
        ? `none`
        : `0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`};
  }
`

const ParagraphCustom = styled(Paragraph)`
  && {
    height: ${({secondary}) => (secondary === 'true' ? `auto` : `200px`)};
    padding: 0;
    text-align: left;
    p {
      font-family: 'Gotham Light', sans-serif;
      font-size: 1.4em;
      color: rgba(0, 0, 0, 0.7);
      line-height: 1.1;
      margin: 0 0 2em 0;
    }
  }
`

const CardTitle = styled(Typography)`
  && {
    min-height: ${({secondary}) => (secondary === 'true' ? `80px` : `100px`)};
    font-family: ${({secondary}) =>
      secondary
        ? `'Gotham Medium', sans-serif`
        : `'Gotham Medium', sans-serif`};

    font-size: 1.6em;
    line-height: 1.1;
    font-weight: 600;
    color: ${({secondary}) => (secondary ? `rgba(0,0,0,0.7)` : `#003a5d`)};

    letter-spacing: normal;
    text-align: left;
    a {
      color: ${({secondary}) => (secondary ? `rgba(0,0,0,0.7)` : `#003a5d`)};
      text-decoration: none;
      &:active {
        color: #003a5d;
      }
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
    margin: auto;
  }
`

const CardContentStyled = styled(CardContent)`
  && {
    text-align: center;
  }
`
const CardItem = ({
  title,
  id,
  description,
  index,
  button = {},
  margin,
  secondary,
}) => {
  return (
    <Grid key={index} item xs={12} sm={6} md={3}>
      <CardStyled secondary={secondary}>
        <CardContentStyled>
          <CardTitle
            secondary={secondary}
            align="center"
            gutterBottom
            variant="h5"
            component="h2"
          >
            <Link as={`/project/${id}`} href={`/project?id=${id}`}>
              <a>{title}</a>
            </Link>
          </CardTitle>
          <ParagraphCustom align="center" paragraph>
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </ParagraphCustom>
          {button.title ? (
            <OutlinedButton align="center" variant="h5" component="h5">
              {button.title}
            </OutlinedButton>
          ) : null}
          <style jsx>{``}</style>
        </CardContentStyled>
      </CardStyled>
    </Grid>
  )
}

const Cards = ({cards, secondary}) => {
  return (
    <Root secondary={secondary}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={secondary === 'true' ? 0 : 16}
      >
        {/* [0,8,16,24,32,40] */}
        {cards.map((item, index) => (
          <CardItem secondary={secondary} key={index} index={index} {...item} />
        ))}
      </Grid>
    </Root>
  )
}

export default Cards
