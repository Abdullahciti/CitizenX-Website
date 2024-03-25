const FilesCard = ({ src, name, fileName, date, size }) => {
  return (
    <div className="file bg-mainMode p-10 rad-10">
      <i className="fa-solid fa-download c-grey p-absolute"></i>
      <div className="icon txt-c">
        <img decoding="async" className="mt-15 mb-15" src={src} alt="" />
      </div>
      <div className="txt-c mb-10 fs-14">{fileName}</div>
      <p className="c-grey fs-13">{name}</p>
      <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
        <span>{date}</span>
        <span>{size}</span>
      </div>
    </div>
  );
};

export default FilesCard;
