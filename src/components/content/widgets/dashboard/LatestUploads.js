import { avi, dll, pdf, psd, txt } from "../../../../assets";

const LatestUploads = () => {
    return ( 
        <div className="latest-uploads p-20 bg-mainMode rad-10">
              <h2 className="mt-0 mb-20">Latest Uploads</h2>
              <ul className="m-0">
                <li className="between-flex pb-10 mb-10">
                  <div className="d-flex align-center">
                    <img decoding="async" className="mr-10" src={pdf} alt="" />
                    <div>
                      <span className="d-block">my-file.pdf</span>
                      <span className="fs-15 c-grey">TopC</span>
                    </div>
                  </div>
                  <div className="bg-eee btn-shape fs-13">2.9mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                  <div className="d-flex align-center">
                    <img decoding="async" className="mr-10" src={avi} alt="" />
                    <div>
                      <span className="d-block">My-Video.avi</span>
                      <span className="fs-15 c-grey">Admin</span>
                    </div>
                  </div>
                  <div className="bg-eee btn-shape fs-13">10.8mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                  <div className="d-flex align-center">
                    <img decoding="async" className="mr-10" src={dll} alt="" />
                    <div>
                      <span className="d-block">My-Psd-File.dll</span>
                      <span className="fs-15 c-grey">Abdullah</span>
                    </div>
                  </div>
                  <div className="bg-eee btn-shape fs-13">4.5mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                  <div className="d-flex align-center">
                    <img decoding="async" className="mr-10" src={txt} alt="" />
                    <div>
                      <span className="d-block">My-Zip-File.txt</span>
                      <span className="fs-15 c-grey">User</span>
                    </div>
                  </div>
                  <div className="bg-eee btn-shape fs-13">8.9mb</div>
                </li>
                <li className="between-flex pb-10 mb-10">
                  <div className="d-flex align-center">
                    <img decoding="async" className="mr-10" src={pdf} alt="" />
                    <div>
                      <span className="d-block">My-DLL-File.pdf</span>
                      <span className="fs-15 c-grey">Admin</span>
                    </div>
                  </div>
                  <div className="bg-eee btn-shape fs-13">4.9mb</div>
                </li>
                <li className="between-flex">
                  <div className="d-flex align-center">
                    <img decoding="async" className="mr-10" src={psd} alt="" />
                    <div>
                      <span className="d-block">My-Eps-File.psd</span>
                      <span className="fs-15 c-grey">Designer</span>
                    </div>
                  </div>
                  <div className="bg-eee btn-shape fs-13">55mb</div>
                </li>
              </ul>
            </div>
     );
}
 
export default LatestUploads;