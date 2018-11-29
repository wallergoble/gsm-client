import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Well from '../components/well'

const IndexPage = () => (
  <Layout>
    <Well />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
