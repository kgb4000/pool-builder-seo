'use client'

import styled from 'styled-components'

const BlogContent = styled.div`
  max-width: 700px;
  padding: 0 1.2rem;
  margin: 0 auto;

  a {
    color: #c0392b;

    &:hover {
      color: #e74c3c;
    }
  }

  ul {
    margin: 0 2rem;

    li {
      margin: 1rem 0;
    }
  }

  section {
    margin: 0;
  }
  .author-info {
    h1 {
      font-size: 1.8rem;
      margin: 2rem 0;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
    h2 {
      text-align: left;
      margin-left: 0;
    }
    img {
      text-align: center;
    }
  }

  .related-posts {
    margin: 2rem 0;
    a {
      font-weight: 400;
    }
  }
`

export default BlogContent
