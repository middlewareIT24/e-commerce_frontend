import PropTypes from "prop-types";
import "../styles/utils.css";

LoadProductButton.propTypes = {
  onLoadProduct: PropTypes.func,
  name: PropTypes.string,
};

function LoadProductButton({ onLoadProduct, name }) {
  return (
    <div className="container my-2 py-2 cursor-pointer" onClick={onLoadProduct}>
      <h5 className="load-more-btn">{name}</h5>
    </div>
  );
}

export default LoadProductButton;
