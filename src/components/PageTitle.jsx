import PropTypes from "prop-types";
import "../styles/utils.css";

PageTitle.propTypes = {
  title: PropTypes.string,
};

function PageTitle({ title }) {
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">{title}</h2>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
