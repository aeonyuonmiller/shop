import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Product = ({ slice }) => (
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
    <img src={slice.primary.img.url} alt={slice.primary.img.alt} />

    <button>Add to cart {slice.primary.price}</button>

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
          background: #bebebe;
          border-radius: 8px;
          padding: 2em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          color: #8592e0;
        }

        img {
          width: 50%;
        }
    `}</style>
  </section>
)

export default Product