import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

export default function PostUpvoter ({ votes, id }) {
  return (
    <ApolloConsumer>
      {client => (
        <button onClick={() => upvotePost(votes, id, client)}>
          {votes}
        </button>
      )}
    </ApolloConsumer>
  )
}

function upvotePost (votes, id, client) {
  client.mutate({
    mutation: gql`
      mutation updatePost($id: ID!, $votes: Int) {
        updatePost(id: $id, votes: $votes) {
          id
          __typename
          votes
        }
      }
    `,
    variables: {
      id,
      votes: votes + 1
    },
    optimisticResponse: {
      __typename: 'Mutation',
      updatePost: {
        __typename: 'Post',
        id,
        votes: votes + 1
      }
    }
  })
}
