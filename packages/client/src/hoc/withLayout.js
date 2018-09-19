import React from 'react'
import Layout from '../components/Layout'

export default Component => (props) => {
  return (
    <Layout {...props}>
      <Component {...props} />
    </Layout>
  )
}
