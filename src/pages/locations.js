'use client'
import Link from 'next/link'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/seo-consultation'

export default function Locations() {
  const SEO = {
    title:
      'I Help Pool Builders in These Locations | Pool Builder SEO Consultant',
    description: `I work with pool companies in these cities. Let's work together to increase the online visibility of your pool company.`,
    type: 'website',
    canonical: 'https://poolbuilderseoconsultant.com/locations',
    openGraph: {
      title:
        'I Help Pool Builders in These Locations | Pool Builder SEO Consultant',
      description: `I work with pool companies in these cities. Let's work together to increase the online visibility of your pool company.`,
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo noindex={true} {...SEO} />
      <Nav
        homeLink="/"
        homeText="Home"
        serviceLink="/#services"
        serviceText="SEO Services"
        whyMeLink="#me"
        whyMeText="Why Me"
        faqLink="#faq"
        faqtext="FAQ"
        blogLink="/blog"
        blogText="Blog"
      />
      <div className="hero">
        <div className="container">
          <h1 className="title">Locations</h1>
          <div className="subtext">
            <p>I help pool builders in cities throughout the entire U.S.</p>
            <Button>
              <a href={calendly} target="_blank">
                Book Your SEO Consultation!
              </a>
            </Button>
            <p>Let's have a Zoom call and I'll share my screen!</p>
          </div>
        </div>
      </div>
      <Areas>
        <div className="small-container areas">
          {/* <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-alpine-nj">
                Alpine, NJ
              </Link>
            </p>
          </div> */}
          {/* <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-mantolooking-nj">
                Mantoloking, NJ
              </Link>
            </p>
          </div> */}
          <div className="location">
            <Link href="/swimming-pool-company-seo-annapolis-md">
              Annapolis, MD
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-atlanta-ga">
              Atlanta, GA
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-jacksonville-fl">
              Jacksonville, FL
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-las-vegas-nv">
              Las Vegas, NV
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-los-angeles-ca">
              Los Angeles, CA
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-miami-fl">Miami, FL</Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-orlando-fl">
              Orlando, FL
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-phoenix-az">
              Phoenix, AZ
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-pittsburg-pa">
              Pittsburg, PA
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-potomac-md">
              Potomac, MD
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-richmond-va">
              Richmond, VA
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-tampa-fl">Tampa, FL</Link>
          </div>

          {/* <div className="location">
            <Link href="/swimming-pool-company-seo-san-diego-ca">
              San Diego, CA
            </Link>
          </div> */}
          {/* <div className="location">
            <Link href="/swimming-pool-company-seo-riverside-ca">
              Riverside, CA
            </Link>
          </div> */}
        </div>
        <div className="container areas">
          <div className="location">
            <Link href="/swimming-pool-company-seo-tulsa-ok">Tulsa, OK</Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-san-diego-ca">
              San Diego, CA
            </Link>
          </div>
          <div className="location">
            <Link href="/swimming-pool-company-seo-virginia-beach-va">
              Virginia Beach, VA
            </Link>
          </div>
          {/* <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-sacramento-ca">
                Sacramento, CA
              </Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-dallas-tx">
                Dallas, TX
              </Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-houston-tx">
                Houston, TX
              </Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-athens-ga">
                Athens, GA
              </Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-plano-tx">Plano, TX</Link>
            </p>
          </div>

          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-tampa-fl">Tampa, FL</Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-tampa-fl">Tampa, FL</Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-tampa-fl">Tampa, FL</Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-tampa-fl">Tampa, FL</Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-coral-springs-fl">
                Coral Springs, FL
              </Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-naples-fl">
                Naples, FL
              </Link>
            </p>
          </div>
          <div className="location">
            <p>
              <Link href="/swimming-pool-company-seo-key-west-fl">
                Key West, FL
              </Link>
            </p>
          </div> */}
        </div>
      </Areas>
      <Footer />
    </>
  )
}

const Areas = styled.div`
  margin: 4rem 0;

  .location {
    margin: 1rem 0;
    padding: 0.5rem 0;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
