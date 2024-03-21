const CourseCard = ({course, avatar, title, desc, parts, cost}) => {
    return ( 
        <div className="course bg-white rad-6 p-relative">
              <img decoding="async" className="cover" src={course} alt="" />
              <img
                decoding="async"
                className="instructor"
                src={avatar}
                alt=""
              />
              <div className="p-20">
                <h4 className="m-0">{title}</h4>
                <p className="description c-grey mt-15 fs-14">
                  {desc}
                </p>
              </div>
              <div className="info p-15 p-relative between-flex">
                <span className="title bg-mainColor c-white btn-shape">
                  Course Info
                </span>
                <span className="c-grey">
                  <i className="fa-regular fa-user"></i>
                  {parts}
                </span>
                <span className="c-grey">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {cost}
                </span>
              </div>
            </div>
     );
}
 
export default CourseCard;