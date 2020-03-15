import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import styled from 'styled-components'

import {rem} from '../utils/mediaGrid.js'

const Block = styled(props => <Grid {...props} />)`
  && {
    position: relative;
  }
`

class Poster extends Component {
  render() {
    const {children, height = '100vh'} = this.props
    return (
      <Block
        container
        height={`100vh`}
        direction={'row'}
        justify={'space-between'}
        alignItems={'stretch'}
        spacing={0}
      >
        <React.Fragment>{children}</React.Fragment>
      </Block>
    )
  }
}

export default Poster
