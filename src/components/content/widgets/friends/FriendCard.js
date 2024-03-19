// Icons
import { IoIosCall } from "react-icons/io";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";

const FriendCard = ({
  src,
  name,
  title,
  friendsNum,
  projNum,
  artNum,
  type,
  date,
}) => {
  return (
    <div className="friend bg-white rad-6 p-20 p-relative">
      <div className="contact">
        <i className="">
          <IoIosCall />
        </i>
        <i className="">
          <BiSolidMessageRoundedEdit />
        </i>
      </div>
      <div className="txt-c">
        <img
          decoding="async"
          className="rad-half mt-10 mb-10 w-100 h-100"
          src={src}
          alt=""
        />
        <h4 className="m-0">{name}</h4>
        <p className="c-grey fs-13 mt-5 mb-0">{title}</p>
      </div>
      <div className="icons fs-14 p-relative">
        <div className="mb-10">
          <i className="fa-regular fa-face-smile fa-fw"></i>
          <span>{friendsNum} Friends</span>
        </div>
        <div className="mb-10">
          <i className="fa-solid fa-code-commit fa-fw"></i>
          <span>{projNum} Projects</span>
        </div>
        <div>
          <i className="fa-regular fa-newspaper fa-fw"></i>
          <span>{artNum} Articles</span>
        </div>
        <span className="vip fw-bold c-orange">{type}</span>
      </div>
      <div className="info between-flex fs-13">
        <span className="c-grey">Joined {date}</span>
        <div>
          <span className="bg-mainColor c-white btn-shape" to="/profile">
            Profile
          </span>
          <a className="bg-red c-white btn-shape" href="#1">
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
