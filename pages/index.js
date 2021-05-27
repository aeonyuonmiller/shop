import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Components
import Logo from './components/icons/Logo'
import UncontrolledLottie from './components/animations/Uncontrolled'
import Card from './components/Card' 
import Cart from './components/icons/Cart'
import Description from './components/Description'
import Layout from './components/Layout'
import Loader from './components/Loader'

import Grid from './components/Layout/Grid'

const logoWrapper = {
  position: "fixed",
  width: "12%",
  minWidth: "100px",
  maxWidth: "150px",
  marginLeft: "10%",
  top: "47%"
}

const productWrapper = {
  position: "absolute",
  border: "5px solid tomato",
  width: "60%",
  minWidth: "400px",
  height: "100vh",
  top: "0",
  left: "5%",
}

const cartBtn = {
  position: "absolute",
  top: "40px",
  right: "40px",
  width: "32px",
}

const nav = {
  position: "absolute",
  top: "40px",
  right: "108px",
  color: "#999"
}

const intro = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
}


export default function Home() {
  return (
    
    <>
      <Head>
        <title>introvert</title>
        <meta name="description" content="Introvert Clothing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Loader />

    <Grid>hi ho ha <span>hihoa</span></Grid>

     <div style={cartBtn}><Cart color="#000"/></div>
     <div style={nav}>textile ware</div>
     <Layout>
       <div style={productWrapper} />
        <motion.div variants={intro} data-scroll style={logoWrapper}><UncontrolledLottie/></motion.div>
     </Layout>
     <Description/>
    </>
  )
}
