import React from 'react'
import { TinaCMS } from 'tinacms'
import { Client, TinaCloudAuthWall } from 'tina-graphql-gateway'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'

const TinaWrapper = ({ children }) => {
  const cms = React.useMemo(() => {
    return new TinaCMS({
      apis: {
        tina: new Client({
          organizationId: 'YOUR_ORGANIZATION_ID',
          clientId: 'YOUR_CLIENT_ID',
          branch: 'main',
        }),
      },
      plugins: [MarkdownFieldPlugin],
      sidebar: true,
      enabled: true,
    })
  }, [])

  return <TinaCloudAuthWall cms={cms}>{children}</TinaCloudAuthWall>
}

export default TinaWrapper