// import 'react-modal-video/scss/modal-video.scss'
import '../styles/globals.scss'
import { useEffect } from 'react'

import TagManager from 'react-gtm-module'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-K5LS529' })
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
