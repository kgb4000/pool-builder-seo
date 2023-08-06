/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { getPosts } from '../../../lib/data'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import Button from '../../../components/Button'
import BlogSection from '../../../components/BlogSection'
const calendly = 'https://calendly.com/bowieseo/seo-consultation'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  const SEO = {
    title:
      'SEO Blog for Pool Companies | Learn To Use SEO & Grow Your Business',
    description: `Use our free and insightful marketing tips to grow your business with search engine optimization for pool companies.`,
    type: 'website',
    canonical: 'https://poolbuilderseoconsultant.com/blog',
    openGraph: {
      title: 'SEO Blog for Pool Builders and Pool Service Companies',
      description:
        'Use our free and insightful marketing tips to grow your business with search engine optimization for pool companies.',
      type: 'website',
    },
  }
  return (
    <>
      <ArticleJsonLd
        url="https://poolbuilderseoconsultant.com/blog"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="Read posts and articles that can help you improve your pool business to attract more leads and customers to your business."
      />
      <NextSeo {...SEO} />
      <Nav />
      <div className="hero">
        <div className="container">
          <h1 className="title">SEO Blog for Pool Companies</h1>
          <div className="subtext">
            <p>
              Free and insightful pro marketing tips for pool builders and pool
              service companies.
            </p>
            <a href={calendly} target="_blank">
              <Button>Book Your Free SEO Consultation!</Button>
            </a>
          </div>
        </div>
      </div>
      <BlogMain>
        <div className="blog-container">
          {data.posts.map((post) => (
            <div key={post.slug}>
              <div className="blog-posts">
                <Link href={`/${post.slug}`} passHref>
                  <img
                    src={post.coverImage.url}
                    alt={post.title}
                    loading="lazy"
                    title={post.title}
                  />
                </Link>
                <div className="blog-info">
                  <Link href={`/${post.slug}`} passHref>
                    <h2>{post.postTitle}</h2>
                  </Link>
                  <Link href={`/${post.slug}`} passHref>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogMain>
      <Footer />
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
