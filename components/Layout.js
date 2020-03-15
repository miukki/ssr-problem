import HeaderBlock from './HeaderBlock'
import Link from 'next/link'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const Layout = props => (
  <div style={layoutStyle}>
    <HeaderBlock />

    {props.content}
  </div>
)

export default Layout
