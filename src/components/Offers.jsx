import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import React from "react";

const Offers = () => {
  const images = [
    {
      id: 1,
      source: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
    },
    {
      id: 2,
      source: "https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg",
    },
    {
      id: 3,
      source: "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg",
    },
  ];

  return (
    <>
      <MDBCarousel showIndicators showControls fade interval={10000} keyboard>
        {images.map((element) => {
          const { id, source } = element;
          return (
            <MDBCarouselItem key={id} itemId={id} style={{ height: "380px" }}>
              <img
                src={source}
                className="d-block w-100"
                alt={`Slide ${id}`}
                style={{ height: "100%" }}
              />
              {/* <MDBCarouselCaption>
                <h5>Slide {id} label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselCaption> */}
            </MDBCarouselItem>
          );
        })}
      </MDBCarousel>
    </>
  );
};

export default Offers;
