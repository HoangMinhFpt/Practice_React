import "./Collection.scss"

function Collection() {
    return (
        <div className="collection-container">
            <div className="collection-one-content">
                <img src="https://aero-theme.myshopify.com/cdn/shop/files/img1-top-aero1.jpg?v=1613507033" alt="Visit the MDN site" />
                <div className="collection-one-title">
                    collection one
                    <div className="collection-text">new trending</div>
                </div>

            </div>
            <div className="collection-two-content">
                <img src="https://aero-theme.myshopify.com/cdn/shop/files/img2-top-aero1.jpg?v=1613507033" alt="Visit the MDN site" />
                <div className="collection-two-title">
                    collection two
                    <div className="collection-text">high performance</div>
                </div>
            </div>
            <div className="collection-three-content">
                <img src="https://aero-theme.myshopify.com/cdn/shop/files/img3-top-aero1.jpg?v=1613507033" alt="Visit the MDN site" />
                <div className="collection-three-title">
                    collection three
                    <div className="collection-text"> new product</div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
