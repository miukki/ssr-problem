import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {Grid, ButtonBase, Card, CardContent} from '@material-ui/core'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import {mediaGrid, rem} from '../utils/mediaGrid.js'

import Cards from './Cards'

const Root = styled.div`
  && {
    margin: ${({margin}) => margin || '0'};
    height: auto;

    ${mediaGrid(`md`)} {
      height: auto;
    }

    ${mediaGrid(`sm`)} {
      height: auto;
    }
  }
`
const Title = styled(Typography)`
  && {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
    font-size: 2.7em;
    font-family: 'Paytone One', sans-serif;
    line-height: 1.1;

    margin-bottom: 1em;
  }
`

const Services = ({projects = [], title, margin}) => (
  <Root margin={margin}>
    <Title component="h2" variant="h2" align="center" gutterBottom>
      {title}
    </Title>

    <Cards secondary="false" cards={projects} />
  </Root>
)

export default Services
