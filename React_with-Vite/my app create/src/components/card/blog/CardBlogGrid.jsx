import { faCartPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardBlogGrid.scss";
import moment from "moment/moment";

function CardBlogGrid(props) {
  const blog = props.data;
  return (
    <div className="card-blog-grid-container">
      <div className="card">
        <img src={blog.img} className="card-img-top" alt="..." />
        <center className="card-body">
          <time className="date-text">
            <span>
              {(() => {
                const date = moment(blog.date).format("DD");
                return date;
              })()}
              <h5>
                {(() => {
                  const date = moment(blog.date).format("/MMM");
                  return date;
                })()}
              </h5>
            </span>
          </time>
          <h5 className="card-title">{blog.title}</h5>
          <h5>
            <FontAwesomeIcon icon={faPenToSquare} /> By: {blog.author}
          </h5>
          <hr />
          <button
            type="button"
            className="btn btn-sm btn-primary"
            title="Add to cart"
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </center>
      </div>
    </div>
  );
}

export default CardBlogGrid;
