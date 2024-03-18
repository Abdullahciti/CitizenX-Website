import { Link } from "react-router-dom/dist";
import { Avatar, welcome } from "../../../../assets";

const Welcome = () => {
  return (
    <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
      <div className="intro p-20 d-flex space-between bg-eee">
        <div>
          <h2 className="m-0">Welcome</h2>
          <p className="c-grey mt-5">TopC</p>
        </div>
        <img decoding="async" className="hide-mobile" src={welcome} alt="" />
      </div>
      <img decoding="async" src={Avatar} alt="" className="avatar" />
      <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
        <div>
          Abdullah Arafa{" "}
          <span className="d-block c-grey fs-14 mt-10">
            Front-end Developper
          </span>
        </div>
        <div>
          14 <span className="d-block c-grey fs-14 mt-10">Projects</span>
        </div>
        <div>
          $---- <span className="d-block c-grey fs-14 mt-10">Earned</span>
        </div>
      </div>
      <Link
        to="/profile"
        className="visit d-block fs-14 bg-mainColor c-white w-fit btn-shape"
      >
        Profile
      </Link>
    </div>
  );
};

export default Welcome;
