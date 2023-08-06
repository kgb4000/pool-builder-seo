'use client'
import Link from 'next/link'
import styled from 'styled-components'
import { ArticleJsonLd, NextSeo } from 'next-seo'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export const metadata = {
  title: 'Blog | Read How A Better Web Experience Can Help Grow Your Business',
  description:
    'Read posts and articles that can help you improve your website designs to attract more leads and customers to your business.',
  metadataBase: new URL('https://poolbuilderseoconsultant.com'),
  alternates: {
    canonical: 'https://poolbuilderseoconsultant.com/blog',
  },
}

export default function Blog({ data }) {
  return (
    <>
      <ArticleJsonLd
        url="https://bowieseo.com/blog"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization."
      />
      <NextSeo {...SEO} />
      <BlogMain>
        <div className="blog-container">
          {data.posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/${post.slug}`} passHref>
                <div className="blog-posts">
                  <img
                    src={post.coverImage.url}
                    alt={post.title}
                    loading="lazy"
                    title={post.title}
                  />
                  <div className="blog-info">
                    <h2>{post.postTitle}</h2>
                    Read more
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </BlogMain>
    </>
  )
}

const BlogMain = styled.main`

  margin-top: 2rem;

  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 4rem;
  }


  .blog-info {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .blog-info h2 {
    font-size: 1.2rem;
    margin: 1rem 0;
    text-align: left;
    color: #000;
  }

  a {
    text-decoration: none;
  }


  @media screen and (min-width: 768px) {
    .blog-info 
      h2 {
        font-size: 2rem;
      }
    .blog-posts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    img {
      width: 95%;
      margin-right: 2rem;
    }
    
`
