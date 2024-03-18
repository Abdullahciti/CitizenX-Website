import avatar from "../imgs/avatar.png"

const Header = () => {
    return ( 
        <div className="header-app head bg-white p-15 between-flex">
             <div className="search p-relative">
            <input className="p-10" type="search" placeholder="Type A Keyword" />
          </div>
          <div className="icons d-flex align-center">
            <span className="notification p-relative">
              <i className="fa-regular fa-bell fa-lg"></i>
            </span>
            <a href="#1"><img src={avatar} alt="" /></a>
          </div>
        </div>
     );
}
 
export default Header;