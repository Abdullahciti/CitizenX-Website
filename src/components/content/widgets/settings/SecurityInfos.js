import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { PiEyeThin } from "react-icons/pi";

const SecurityInfos = () => {
  const [password, setPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showDevs, setShowDevs] = useState(false);

  return (
    <div className="p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Security Info</h2>
      <p className="mt-0 mb-20 c-grey fs-15">
        Security Information About Your Account
      </p>
      <div className="sec-box mb-15 between-flex">
        <div  className="left">
          <span>Password</span>
          <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2023</p>
          { password && <div className="pass">
            <input type={!showPass ? "password" : "text"} value={"123456789"} onChange={(e) => setPassword(e.target.value)} />
            {!showPass && <FaRegEyeSlash onClick={() => setShowPass(true)} />}
            {showPass && <PiEyeThin onClick={() => setShowPass(false)} />}
          </div>}
        </div>
        <button className="button bg-mainColor c-white btn-shape" onClick={() => setPassword(prev => !prev)}>
          Change
        </button>
      </div>
      <div className="sec-box mb-15 between-flex">
        <div>
          <span>Two-Factor Authentication</span>
          <p className="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
        </div>
        <label>
          <input className="toggle-checkbox" type="checkbox" />
          <div className="toggle-switch"></div>
        </label>
      </div>
      <div className="sec-box between-flex">
        <div className="left">
          <span>Devices</span>
          <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
          {showDevs && <ul>
            <li>device 1 - ip-192.168.15800</li>
            <li>device 2 - ip-192.168.15800</li>
            <li>device 3 - ip-192.168.15800</li>
            <li>device 4 - ip-192.168.15800</li>
            <li>device 5 - ip-192.168.15800</li>
          </ul>}
        </div>
        <div className="right">
        <button className="button bg-mainColor c-white btn-shape" onClick={() => setShowDevs(prev => !prev)}>
          Devices
        </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityInfos;
