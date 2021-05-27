import '../styles/globals.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { TinaCMS, TinaProvider, useCMS } from 'tinacms'
import { useMemo, useEffect, useState } from 'react'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'

// Preloader
import Loader from './components/Loader'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const TinaWrapper = dynamic(() => import('./components/tina-wrapper'))

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.pathname.startsWith('/admin')) {
    return (
      <TinaWrapper>
        <Component {...pageProps} />
      </TinaWrapper>
    )
  }
  return <Component {...pageProps} />
}