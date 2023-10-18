import React from "react";
import "./Collection.scss"

function Collection(props) {
const Itema = ({item, index})=>(
    <div className="collection-content" key={index}>
        <img src={item.img} key={index} alt="Visit the MDN site"/>
        <div className="collection-title">
            {item.title}
            <div className="collection-text">{item.description}</div>
        </div>
    </div>
        )

    return (
        <div className="collection-container" id={props.id} style={{ minHeight: 100 }}>
            {props.data.map((item, index)=>(
                <Itema item={item} index={index} key={index}/>
                ))}
        </div>
    );
}

export default Collection;
