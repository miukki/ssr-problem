import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Link from 'next/link'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {mediaGrid} from '../utils/mediaGrid.js'

import Hidden from '@material-ui/core/Hidden'

const SubTitle = styled(Typography)`
  && {
    font-weight: 400;
    font-size: 16px;
    color: #9f9ba7;
    letter-spacing: normal;
  }
`

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
const Root = styled.div`
  && {
    background-color: #efefef;
    padding-bottom: 4em;
  }
`
const AvatarStyled = styled(Avatar)`
  && {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 120px;
      filter: grayscale(100%);
      &:hover {
        filter: grayscale(0%);
      }
    }

    ${mediaGrid(`sm`)} {
      width: 80px;
      height: 80px;
    }
  }
`
const CardStyled = styled(Card)`
  && {
    background: none;
    border: none;
    box-shadow: none;
    display: flex;
  }
`
const CardContentStyled = styled(CardContent)`
  && {
    padding: 0 30px;
    ${mediaGrid(`sm`)} {
      padding: 0 20px;
    }
  }
`

const ParagraphCustom = styled(Paragraph)`
  && {
    font-size: 11px;
    line-height: 2.09;
    letter-spacing: 0.33px;
    padding: 0;
    margin: 0;
  }
`

const Name = styled(Typography)`
  && {
    font-size: 1.125em;
    color: #003d59;
    font-weight: normal;
    letter-spacing: 0.33px;
    line-height: 1.28;
    margin-top: 1.2em;
  }
`

const Title = styled(SubTitle)`
  && {
    font-weight: 600;
    font-size: 2em;
    color: #003a53;
    letter-spacing: normal;
    margin: 2em auto;
  }
`

const Team = ({members = [], title = 'Default title'}) => (
  <Root>
    <Title component="h2" variant="h2" align="center" gutterBottom>
      {title}
    </Title>

    <Grid container direction="row" justify="center">
      <Grid item xs={10} sm={8}>
        <Grid container spacing={8}>
          {members.map(member => (
            <Grid item key={member.title} xs={12} md={6}>
              <CardStyled>
                <a target="blank" href={member.linkedin}>
                  <AvatarStyled alt={member.title} src={member.src} />
                </a>

                <CardContentStyled>
                  <Name gutterBottom variant="h5" component="h2">
                    {member.title}
                  </Name>
                  <ParagraphCustom paragraph>
                    {member.description}
                  </ParagraphCustom>
                </CardContentStyled>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Root>
)

export default Team
