import '../styles/globals.css'
import Link from 'next/link'
import { AnimatePresence, MotionConfig } from "framer-motion";

// import { PrismicProvider } from '@prismicio/react'
// import { PrismicPreview } from '@prismicio/next'
// import { linkResolver, repositoryName } from '../prismicio'

import Navi from '../components/Navi';
import Cookies from '../components/Cookies';


function MyApp({ Component, pageProps, router }) {
  return (
      <MotionConfig reducedMotion="user">
        <AnimatePresence exitBeforeEnter={true}>
          {/* <PrismicPreview repositoryName={repositoryName}> */}
            <Component {...pageProps} key={router.route} />
          {/* </PrismicPreview> */}
        </AnimatePresence>
        <Navi />
        <Cookies />
      </MotionConfig>
  )
}

export default MyApp
