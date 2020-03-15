import Link from 'next/link'
import styled from 'styled-components'
import {Typography, Grid} from '@material-ui/core'

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
const ParagraphCustom = styled(Paragraph)`
  && {
    font-size: 11px;
    letter-spacing: 0.33px;
    margin: 0;
    padding: 0;
    a {
      cursor: pointer;
      color: #fff;
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const Root = styled.div`
  && {
    background-color: #1f231f;
    padding: 20px 40px;
  }
`

const FooterSmall = () => (
  <Root>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <ParagraphCustom align="right" colortext="#fff" paragraph>
          &copy; 2018 Simplimate Pty Ltd
        </ParagraphCustom>
        {/* <ParagraphCustom align="right" colortext="#fff" paragraph>
            <Link href="/privacypolicy">
              <a>{'Privacy Policy'}</a>
            </Link>
          </ParagraphCustom> */}
      </Grid>
    </Grid>
  </Root>
)

export default FooterSmall
