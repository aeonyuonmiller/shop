import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Editorial = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <img src={slice.primary.backgroundimage.url} alt={slice.primary.backgroundimage.alt} />

    <style jsx>{`
        section {
          max-width: 600px;
          min-height: 300px;
          max-height: 600px;
          margin: 4em auto;
          text-align: center;
          background: olive;
          color: white;
          border-radius: 30px;
          overflow: hidden;
        }
        .title {
          color: rgba(0,0,0,0.6);
        }

        p{margin: 2em;}

        img{
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
    `}</style>
  </section>
)

export default Editorial