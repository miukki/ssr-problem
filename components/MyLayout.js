import CssBaseline from '@material-ui/core/CssBaseline'

const Layout = props => (
  <div>
    <CssBaseline />
    {props.children}
  </div>
)

export default Layout
