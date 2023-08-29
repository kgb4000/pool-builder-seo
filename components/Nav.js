import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'

const calendly = 'https://calendly.com/bowieseo/seo-consultation'

const Nav = ({
  homeLink,
  homeText,
  serviceLink,
  serviceText,
  whyMeLink,
  whyMeText,
  faqLink,
  faqtext,
}) => {
  return (
    <>
      <header>
        <div className="container">
          <Link href="/">
            <img
              src="/images/pool-builder-seo.webp"
              className="logo"
              alt="Pool Builder SEO Consultant"
              title="Pool Builder SEO Consultant"
              width="250px"
              height="auto"
            />
          </Link>
          <nav>
            <ul className="nav">
              <li>
                <Link href={homeLink}>{homeText}</Link>
              </li>
              <li>
                <Link href={serviceLink}>{serviceText}</Link>
              </li>
              <li>
                <Link href={whyMeLink}>{whyMeText}</Link>
              </li>
              <li>
                <Link href={faqLink}>{faqtext}</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
