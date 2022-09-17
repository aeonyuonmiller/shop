import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export function linkResolver(doc) {
  switch (doc.type) {
    case 'home':
      return '/'
    case 'music':
      return '/music'
    case 'merch':
      return '/merch'
    case 'social':
      return '/social'
    // case 'page':
    //   return `/${doc.uid}`
    default:
      return null
  }
}

export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}