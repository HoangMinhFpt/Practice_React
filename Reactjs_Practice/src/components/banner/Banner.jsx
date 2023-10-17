import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss"

const Item = ({ item, index }) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
        <Link to={item.to}>
            <center>
                <img src={item.img} className="img-fluid" alt={item.title} />
            </center>
            {(item.title || item.description) && (
                <div className="carousel-caption d-none d-md-block">
                    {item.title && <h5>{item.title}</h5>}
                    {item.description && <p>{item.description}</p>}
                </div>
            )}
        </Link>
    </div>
);

const Indicator = ({ item, index }) => (
    <li
        data-bs-target={`#${item}`}
        data-bs-slide-to={index}
        className={`${index === 0 ? "active" : ""}`}
    />
);

const Banner = (props) => {
    return (
        <div
            id={props.id}
            className={`carousel slide ${props.className}`}
            data-bs-ride="carousel"
            style={{ minHeight: 100 }}
        >
            <ol className="carousel-indicators">
                {props.data.map((item, index) => (
                    <Indicator item={props.id} index={index} key={index} />
                ))}
            </ol>
            <div className="carousel-inner">
                {props.data.map((item, index) => (
                    <Item item={item} index={index} key={index} />
                ))}
            </div>
            <a
                className="carousel-control-prev"
                href={`#${props.id}`}
                role="button"
                data-bs-slide="prev"
            >
                <FontAwesomeIcon icon={faChevronLeft} style={{ color: "red" }} />
            </a>
            <a
                className="carousel-control-next"
                href={`#${props.id}`}
                role="button"
                data-bs-slide="next"
            >
                <FontAwesomeIcon icon={faChevronRight} style={{ color: "red" }} />
            </a>
        </div>
    );
};

export default Banner;
