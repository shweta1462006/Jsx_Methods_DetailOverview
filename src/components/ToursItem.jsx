import React from 'react'

import {Link} from 'react-router-dom'
export default function ToursItem({id,title,desc,img}) {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={img} alt="" height={400}  />
                    <div className="card-body">
                        <h3 className='card-text'>{title}</h3>
                        <p className="card-text">{desc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link to={`toursDetail/${id}`} type="button" className="btn btn-sm btn-outline-secondary">View</Link>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
