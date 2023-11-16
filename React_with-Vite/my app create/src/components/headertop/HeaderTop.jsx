import "./HeaderTop.scss";

function HeaderTop(props) {
  return (
    <div className="header-top-container p-5">
      <div className=" text-center header-top-content">
        <span className="header-top-title display-5">{props.data}</span>
      </div>
    </div>
  );
}

export default HeaderTop;
