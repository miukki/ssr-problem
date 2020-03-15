const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://use.typekit.net/xhk5bjj.css'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  // const nimbus = new FontFaceObserver('nimbus-sans-extended')

  // nimbus.load().then(() => {
  //   document.documentElement.classList.add('nimbus-sans-extended')
  // })

  // const canada = new FontFaceObserver('canada-type-gibson')

  // canada.load().then(() => {
  //   document.documentElement.classList.add('canada-type-gibson')
  // })
}

export {Fonts}
