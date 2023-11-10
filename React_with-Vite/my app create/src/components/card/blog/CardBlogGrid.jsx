import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardBlogGrid.scss";
import moment from "moment/moment";

function CardBlogGrid(props) {
  const blog = props.data;
  return (
    <div className="card-blog-grid-container">
      <div className="card">
        <img src={blog.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <center>
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
            <h4
              className="card-title text-truncate"
              style={{ maxWidth: "95%" }}
            >
              {blog.title}
            </h4>
            <h5>
              <FontAwesomeIcon icon={faPenToSquare} /> By: {blog.author}
            </h5>
            <hr />
            <div
              className="text-description text-truncate"
              style={{ maxWidth: "95%", maxHeight: "50px" }}
            >
              {blog.description}
            </div>
            <button type="button" className="btn btn-sm btn-secondary">
              Read more
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default CardBlogGrid;
