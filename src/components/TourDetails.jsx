import React from "react";
import { Link, useParams } from "react-router-dom";
import { tours } from "../data/data.js";

export default function TourDetails() {
  const { tourId } = useParams();
  console.log(tourId);

  const tourDetailPage = tours.find((tour) => tour.id === parseInt(tourId));
  console.log(tourDetailPage);
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <Link to="/">
        <h3
          className="rounded-pill bg-primary text-center p-3 text-white"
          style={{ width: "30%", textDecoration: "none" }}
        >
          Go Back
        </h3>
      </Link>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={tourDetailPage.img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="400"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {tourDetailPage.title}
          </h1>
          <p className="lead">{tourDetailPage.desc}</p>
          <h4>Rent : {tourDetailPage.price} / day</h4>
        </div>
      </div>
    </div>
  );
}
