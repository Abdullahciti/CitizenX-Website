const ProjectCard = ({ date, srcLink, title, desc, src, lvl, skills, price }) => {
  return (
    <div className="project bg-mainMode p-20 rad-6 p-relative">
      <span className="date fs-13 c-grey">{date}</span>
      <a
        href={srcLink}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className="m-0">{title}</h4>
      </a>
      <p className="c-grey mt-10 mb-10 fs-14">{desc}</p>
      <div className="team">
        {src.map((src) => (
          <a href={"#1"}>
            <img decoding="async" src={src} alt="" />
          </a>
        ))}
      </div>
      <div className="do d-flex">
        {skills.map((skill) => (
          <span className="fs-13 rad-6 bg-eee">{skill}</span>
        ))}
      </div>
      <div className="info between-flex">
        <div className="prog bg-eee">
          <span className={`bg-red ${lvl}`} data-width={lvl}></span>
        </div>
        <div className="fs-14 c-grey">
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
