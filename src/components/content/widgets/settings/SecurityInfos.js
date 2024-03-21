const SecurityInfos = () => {
  return (
    <div className="p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Security Info</h2>
      <p className="mt-0 mb-20 c-grey fs-15">
        Security Information About Your Account
      </p>
      <div className="sec-box mb-15 between-flex">
        <div>
          <span>Password</span>
          <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2023</p>
        </div>
        <a className="button bg-mainColor c-white btn-shape" href="#1">
          Change
        </a>
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
        <div>
          <span>Devices</span>
          <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
        </div>
        <a className="bg-eee c-black btn-shape" href="#1">
          Devices
        </a>
      </div>
    </div>
  );
};

export default SecurityInfos;
