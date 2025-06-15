import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import galleryPoster from '../data/galleryImages.js'
import Masonry ,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages  from '../data/galleryImages.js'
export default function Gallery() {
    return (
        <div>
            <Container>
                <Row className='my-4'>
                    <Col>
                        <h2 className='text-center'>Meet Our Expertise Location</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg='3'>
                        <h3 className='rounded-pill bg-primary text-center text-white py-2'  >Domestic Tours</h3>
                    </Col >
                    <Col lg='3'>
                        <h3 className='rounded-pill bg-primary text-center text-white py-2'  >International Tours</h3>
                    </Col>
                    <Col lg='3'>
                        <h3 className='rounded-pill bg-primary text-center text-white py-2'  >National Tours</h3>
                    </Col>
                    <Col lg='3'>
                        <h3 className='rounded-pill bg-primary text-center text-white py-2'  >Exotic Tours</h3>
                    </Col>
                </Row>

                <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 4 }}>
                  <Masonry gutter='1.5rem' className='p-4'>
                    {galleryPoster.map((tourPlace,index)=>(
                        <Col key={index} >
                        <img src={tourPlace} alt="" style={{width:'100%',height:'auto',borderRadius:'15px'}} />
                        </Col>
                    ))}
                  </Masonry>
                  </ResponsiveMasonry>
            </Container>
        </div>
    )
}
