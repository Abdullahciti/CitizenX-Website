import { Link } from "react-router-dom";

const DearUser = () => {
    return ( 
        <div className="dear-user">
            <p>Oops, this link has no sources yet!</p>
            <p>
                Please note that this website may not be available because it is undergoing development. Thank you.
                <Link className="bg-mainColor c-white btn-shape" to={"/"}>Back to Home</Link>
            </p>
        </div>
     );
}
 
export default DearUser;
