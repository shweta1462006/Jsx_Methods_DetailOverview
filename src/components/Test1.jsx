import React from 'react'

import Masonry, { ResponsiveMasonry} from "react-responsive-masonry";

import galleryImages from '../data/galleryImages.js'


export default function Test1() {

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 768: 3, 992: 4 ,1230:5}} className='p-3' >
        <Masonry  gutter='5px'>
          {galleryImages.map((item, index) => (
            <img
              className="masonry__img"
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "15px" ,padding:'5px'}}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}
