import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: createdAt_DESC) {
        title
        slug
        postTitle
        coverImage {
          url
          width
          height
        }
        date
        excerpt
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            width
            height
          }
        }
        relatedPosts {
          raw
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        excerpt
        postTitle
        coverImage {
          url
          width
          height
        }
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            height
            width
          }
        }
        relatedPosts {
          raw
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getPostsSlugs = async () => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getRecentPosts = async () => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
  query GetPostDetails() {
    posts(where: {slug_not: $slug}
      last: 3) {
        title
        url
      }
      createdAt
      slug
  }
  `
  return await graphQLClient.request(query)
}

export const getRelatedPosts = async () => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
  query GetPostDetails() {
    posts(where: {slug_not: $slug}
      last: 3) {
      }
      createdAt
      slug
  }
  `
  return await graphQLClient.request(query)
}
