import App, { Container, AppComponentType } from 'next/app'
import React from 'react'
import withApolloClient, { WithApolloClientProps } from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'



class MyApp extends App<AppComponentType & WithApolloClientProps> {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
