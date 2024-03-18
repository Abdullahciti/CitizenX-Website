// Icons
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const SocialMedia = () => {
    return ( 
        <div className="social-media p-20 bg-white rad-10 p-relative">
              <h2 className="mt-0 mb-25">Social Media Stats</h2>
              <div className="box twitter p-15 p-relative mb-10 between-flex">
                <FaSquareXTwitter />
                <span>500 Followers</span>
                <a className="fs-13 c-white btn-shape" href="#1">
                  Follow
                </a>
              </div>
              <div className="box facebook p-15 p-relative mb-10 between-flex">
                <FaFacebookSquare />
                <span>2M Like</span>
                <a className="fs-13 c-white btn-shape" href="#1">
                  Like
                </a>
              </div>
              <div className="box youtube p-15 p-relative mb-10 between-flex">
                {/*  */}
                <FaYoutube />
                <span>1k Subs</span>
                <a className="fs-13 c-white btn-shape" href="#1">
                  Subscribe
                </a>
              </div>
              <div className="box instagram p-15 p-relative mb-10 between-flex">
                <FaInstagramSquare />
                <span>4k Followers</span>
                <a className="fs-13 c-white btn-shape" href="#1">
                  Follow
                </a>
              </div>
            </div>
     );
}
 
export default SocialMedia;