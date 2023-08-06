import Link from 'next/link'
import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Bio from '../../components/Bio'
import { ShareBtn } from '../../components/Share-Btns'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import { BiCalendar, BiStopwatch } from 'react-icons/bi'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
  }
}

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export default function Articles({ post }) {
  const SEO = {
    title: post.title,
    description: post.excerpt,
    url: `https://poolbuilderseoconsultant.com/${post.slug}`,
    canonical: `https://poolbuilderseoconsultant.com/${post.slug}`,
    type: 'article',
    openGraph: {
      type: 'article',
      description: post.excerpt,
      // article: {
      //   publishedTime: post.date,
      //   authors: [`https://www.example.com/authors/@${post.author.name}`],
      // },
      images: [
        {
          url: post.coverImage.url,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      url: `https://poolbuilderseoconsultant.com/${post.slug}`,
      site_name: 'Pool Builder SEO Consultant',
    },
  }

  return (
    <>
      <Nav
        homeLink="/"
        homeText="Home"
        serviceLink="/#services"
        serviceText="SEO Services"
        whyMeLink="/#why-me"
        whyMeText="Why Me"
        faqLink="/#faq"
        faqtext="FAQ"
        blogLink="/blog"
        blogText="Blog"
      />
      <ArticleJsonLd
        url={`https://poolbuilderseoconsultant.com/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        alt={post.title}
        datePublished={post.date}
        authorName={[post.author.name]}
        authorImg={post.author.photo.url}
        publisherName={post.author.name}
        publisherLogo="https://poolbuilderseoconsultant.com/public/images/logo.jpg"
        description={post.excerpt}
      />
      <NextSeo {...SEO} />
      <BlogContent>
        <div className="blog-container author-info">
          <h1>{post.postTitle}</h1>
          <img
            src={[post.coverImage.url]}
            alt={post.title}
            title={post.title}
            loading="lazy"
          />
          <div className="blog-info">
            <div className="date-time">
              <div className="date">
                <BiCalendar />
                <p>
                  {new Date(post.date).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="date">
                <BiStopwatch />
                <p>{post.readTime}</p>
              </div>
            </div>
            <div className="author-info">
              <img
                className="blog-avatar"
                src={post.author.photo.url}
                alt={post.author.name}
                loading="lazy"
              />
              <p>- by {post.author.name}</p>
            </div>
          </div>
          <ShareBtn
            shareLink={`https://poolbuilderseoconsultant.com/${post.slug}`}
          />

          <RichText content={post.content.raw} />
          <ShareBtn
            shareLink={`https://poolbuilderseoconsultant.com/${post.slug}`}
          />
          <Bio authorImg={post.author.photo.url} authorBio={post.author.bio} />
          {/* <h2>Other Interesting Posts</h2>
            <div className="related-posts">
              <RichText content={post.relatedPosts.raw} />
            </div> */}
          <p>
            <Link href="/blog">Back to blog &rarr;</Link>
          </p>
        </div>
      </BlogContent>
      <Footer />
    </>
  )
}

const BlogContent = styled.main`
  .blog-container {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }

  b {
    font-weight: 700;
  }

  ul,
  ol {
    margin-left: 2.5rem;
    margin-bottom: 2rem;

    li {
      margin: 0.5rem 0;
    }
  }

  img {
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 1rem;
  }

  h3 {
    color: #004475;
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

  .blog-info {
    .date {
      margin-right: 1.5rem;
      display: flex;
      align-items: center;

      p {
        margin-left: 0.5rem;
      }
    }

    .date-time {
      display: flex;
    }

    .author-info {
      display: flex;
      align-items: center;

      img {
        display: inline-block;
        margin-bottom: 0;
        margin-right: 0.5rem;
        margin-left: 0;
      }
      span {
        margin-left: 1rem;
      }
    }
    .blog-avatar {
      max-width: 2.5rem;
      border: 2px solid #cf0a0a;
      border-radius: 100%;
    }
  }
`
