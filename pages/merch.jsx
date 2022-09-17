import * as prismic from "@prismicio/client"
import sm from "../sm.json"
import {components } from "../slices"
import { SliceZone } from "@prismicio/react"

import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'
import View from '../components/View';

const merch = ({page, metaTitle, metaDescription}) => {
  return (
    <>
    <Layout>
      <Head>
        <title>{ metaTitle }</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Merch</h2>

      {/* <SliceZone slices={page.data.slices} components={components} /> */}
    </Layout>

    <h5 className="info"><View>Soft but Hardcore</View></h5>
    </>
  )
}

export default merch

// export const getStaticProps = async () => {
//   const client = prismic.createClient(sm.apiEndpoint)
//   const page = await client.getByUID("page", "merch")

//   return {
//     props: { page }
//   }
// }