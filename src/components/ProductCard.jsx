// zira issue: ECA-4
import { MDBCard, MDBCardBody, MDBCardImage, MDBIcon } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import React from "react";
// css
import "../styles/utils.css";

ProductCard.propTypes = {
  // productId: PropTypes.number,
  url: PropTypes.string,
  altMessage: PropTypes.string,
  productTitle: PropTypes.string,
  price: PropTypes.number,
  offerPrice: PropTypes.number,
  offerPercentage: PropTypes.number,
  categoryName: PropTypes.string,
  categoryUrl: PropTypes.string,
};

function ProductCard({
  url,
  altMessage,
  productTitle,
  price,
  offerPrice,
  offerPercentage,
  categoryName,
  categoryUrl,
}) {
  const gotoProductDetails = () => {
    // routing will be implemented here after integrating backend
    console.log("hello");
  };
  return (
    <MDBCard className="cursor-pointer" onClick={gotoProductDetails}>
      <MDBCardImage src={url} position="top" alt={altMessage} />
      <MDBCardBody>
        {/* title */}
        <div className="d-flex justify-content-between mb-3">
          <h5 className="mb-0">{productTitle}</h5>
        </div>

        {/* price */}
        <div className="d-flex justify-content-between">
          {/* selling price */}
          <h5 className="text-dark mb-0">৳{price}</h5>
          {/* price without discount */}
          <p className="text-danger">
            <s>৳{offerPrice}</s>
            <span> -{offerPercentage}%</span>
          </p>
        </div>

        {/* review */}
        <div class="d-flex justify-content-between">
          {/* category */}
          <p className="small">
            <a href={categoryUrl} className="text-muted">
              {categoryName}
            </a>
          </p>
          {/* <p class="text-muted mb-0">category</p> */}
          <div class="ms-auto text-warning">
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
          </div>
        </div>

        {/* buttons */}
        {/* <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup> */}
        {/* <div className="card-body">
          <Link to={"/product/"} className="btn btn-dark m-1">
            Buy Now
          </Link>
          <button className="btn btn-dark m-1">Add to Cart</button>
        </div> */}
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProductCard;
