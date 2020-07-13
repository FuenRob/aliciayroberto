import React from 'react'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Lo siento, pero no encuentro lo que buscas</h1>
        <p>Es posible que lo que buscas se haya perdido :S</p>
      </Layout>
    )
  }
}

export default NotFoundPage
