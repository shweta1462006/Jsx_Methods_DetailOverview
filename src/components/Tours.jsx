import React from 'react'
import ToursItem from './ToursItem'
import { tours } from '../data/data.js'

export default function Tours() {
  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container ">
          <div className="row row-cols-1  row-cols-sm-2 row-cols-md-3 g-3">
            {
              tours.map((tour) =>
              (
                <ToursItem key={tour.id} id={tour.id} title={tour.title} img={tour.img} desc={tour.desc} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
