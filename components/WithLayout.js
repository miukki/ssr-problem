// components/MyLayout.js

import HeaderBlock from './HeaderBlock'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      {/* <HeaderBlock /> */}
      <Page />
    </div>
  )
}

export default withLayout
