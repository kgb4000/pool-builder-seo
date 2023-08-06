'use client'
import styled from 'styled-components'

export default function postBio({ authorName, authorImg, authorBio }) {
  return (
    <>
      <BioSection>
        <div className="solution-container">
          <img src={authorImg} alt={authorName} loading="lazy" />
          <div>
            <h3>About the author</h3>
            <p>{authorBio}</p>
          </div>
        </div>
      </BioSection>
    </>
  )
}

const BioSection = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 5px;
  border: 2px solid #ddd;
  color: #101010;
  margin-bottom: 4rem;

  .solution-container {
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 500px) {
      display: flex;
    }
  }

  img {
    width: 6rem;
    border: 4px solid #cf0a0a;
    border-radius: 50%;
    margin-right: 2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
`
