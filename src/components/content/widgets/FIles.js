import React from "react";
import {
  pdf,
  avi,
  dll,
  eps,
  zip,
  png,
  psd,
  txt,
} from "../../../assets/index.js";

// components
import FilesCard from "./files/FilesCard.js";

// Data
import allFiles from "./files/allFiles";

// Motion to improve ux
import { motion } from "framer-motion";

const Files = ({ searchValue }) => {
  return (
    <div className="files">
      <div className="content w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="p-relative">Files</h1>
          <div className="files-page d-flex m-20 gap-20">
            <div className="files-stats p-20 bg-white rad-10">
              <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
              <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
                <i className="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon"></i>
                <div className="info">
                  <span>PDF Files</span>
                  <span className="c-grey d-block mt-5">130</span>
                </div>
                <div className="size c-grey">6.5GB</div>
              </div>
              <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
                <i className="fa-regular fa-images fa-lg green center-flex c-green icon"></i>
                <div className="info">
                  <span>Images</span>
                  <span className="c-grey d-block mt-5">115 Files</span>
                </div>
                <div className="size c-grey">3.5GB</div>
              </div>
              <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
                <i className="fa-regular fa-file-word fa-lg red center-flex c-red icon"></i>
                <div className="info">
                  <span>Word Files</span>
                  <span className="c-grey d-block mt-5">110 Files</span>
                </div>
                <div className="size c-grey">3.2GB</div>
              </div>
              <div className="d-flex align-center border-eee p-10 rad-6 fs-13">
                <i className="fa-solid fa-file-csv fa-lg orange center-flex c-orange icon"></i>
                <div className="info">
                  <span>CSV Files</span>
                  <span className="c-grey d-block mt-5">99 Files</span>
                </div>
                <div className="size c-grey">2.9GB</div>
              </div>
              <a
                className="upload bg-blue c-white fs-13 rad-6 d-block w-fit"
                href="#1"
              >
                <i className="fa-solid fa-angles-up mr-10"></i>
                Upload
              </a>
            </div>
            {searchValue ? (
              <div className="files-content d-grid gap-20">
              {allFiles.map((fileCard, index) => (
                (fileCard.props.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  fileCard.props.fileName.toLowerCase().includes(searchValue.toLowerCase())) && (
                  <React.Fragment key={index}>
                    <FilesCard
                      src={fileCard.props.src}
                      fileName={fileCard.props.fileName}
                      name={fileCard.props.name}
                      date={fileCard.props.date}
                      size={fileCard.props.size}
                    />
                  </React.Fragment>
                )
              ))}
            </div>
            ) : (
              <div className="files-content d-grid gap-20">
                <FilesCard
                  src={pdf}
                  fileName={"my-file.pdf"}
                  name={"Citi"}
                  date={"20/06/2023"}
                  size={"5.5MB"}
                />
                <FilesCard
                  src={avi}
                  fileName={"job-file.avi"}
                  name={"Admin"}
                  date={"16/5/2022"}
                  size={"12.5MB"}
                />
                <FilesCard
                  src={eps}
                  fileName={"my-file.eps"}
                  name={"Uploader"}
                  date={"16/1/2024"}
                  size={"12.5MB"}
                />
                <FilesCard
                  src={psd}
                  fileName={"my-file.psd"}
                  name={"Abdullah"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={png}
                  fileName={"my-file.png"}
                  name={"Designer"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={zip}
                  fileName={"my-file.zip"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={txt}
                  fileName={"my-file.txt"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={psd}
                  fileName={"my-file.psd"}
                  name={"Abdullah"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={png}
                  fileName={"my-file.png"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"1.1MB"}
                />
                <FilesCard
                  src={dll}
                  fileName={"my-file.dll"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"10.1MB"}
                />
                <FilesCard
                  src={avi}
                  fileName={"my-file.avi"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"13.1MB"}
                />
                <FilesCard
                  src={eps}
                  fileName={"my-file.eps"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"24.1MB"}
                />
                <FilesCard
                  src={pdf}
                  fileName={"my-file.pdf"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={dll}
                  fileName={"my-file.dll"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"13MB"}
                />
                <FilesCard
                  src={psd}
                  fileName={"my-file.psd"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"16MB"}
                />
                <FilesCard
                  src={txt}
                  fileName={"my-file.txt"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={zip}
                  fileName={"my-file.zip"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"21MB"}
                />
                <FilesCard
                  src={dll}
                  fileName={"my-file.dll"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"11MB"}
                />
                <FilesCard
                  src={eps}
                  fileName={"my-file.eps"}
                  name={"Uploader"}
                  date={"16/5/2021"}
                  size={"19.1MB"}
                />
                <FilesCard
                  src={png}
                  fileName={"my-file.png"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={pdf}
                  fileName={"my-file.pdf"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"7.1MB"}
                />
                <FilesCard
                  src={psd}
                  fileName={"my-file.psd"}
                  name={"Abdullah"}
                  date={"16/5/2021"}
                  size={"9.2MB"}
                />
                <FilesCard
                  src={dll}
                  fileName={"my-file.dll"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"8.1MB"}
                />
                <FilesCard
                  src={dll}
                  fileName={"my-file.dll"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={dll}
                  fileName={"my-file.dll"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"10.1MB"}
                />
                <FilesCard
                  src={pdf}
                  fileName={"my-file.pdf"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"8MB"}
                />
                <FilesCard
                  src={avi}
                  fileName={"my-file.avi"}
                  name={"Admin"}
                  date={"16/5/2021"}
                  size={"4.1MB"}
                />
                <FilesCard
                  src={psd}
                  fileName={"my-file.psd"}
                  name={"Abdullah"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={png}
                  fileName={"my-file.png"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"13.1MB"}
                />
                <FilesCard
                  src={pdf}
                  fileName={"my-file.pdf"}
                  name={"Coder"}
                  date={"16/5/2021"}
                  size={"15.1MB"}
                />
                <FilesCard
                  src={psd}
                  fileName={"my-file.psd"}
                  name={"Abdullah"}
                  date={"16/5/2021"}
                  size={"17.1MB"}
                />
                <FilesCard
                  src={avi}
                  fileName={"my-file.avi"}
                  name={"Admin"}
                  date={"16/5/2021"}
                  size={"5.1MB"}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Files;
