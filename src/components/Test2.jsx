import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import galleryImages from '../data/galleryImages.js'
export default function Test2() {
    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <h1 className='text-center'>Travel Experience</h1>
                        <Row className='my-5'>
                            <Col><h4 className='text-center text-white bg-primary rounded-pill p-2'>National Tours </h4></Col>
                            <Col><h4 className='text-center text-white bg-primary rounded-pill p-2'>International Tours </h4></Col>
                            <Col><h4 className='text-center text-white bg-primary rounded-pill p-2'>Domestic Tours </h4></Col>
                            <Col><h4 className='text-center text-white bg-primary rounded-pill p-2'>Exotic Tours </h4></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    {
                        galleryImages.map((item)=>(
                            <Col xs='6'  lg='3'  >
                            <img src={item} alt="" className='rounded-lg' style={{width:'95%',height:'90%'}} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
