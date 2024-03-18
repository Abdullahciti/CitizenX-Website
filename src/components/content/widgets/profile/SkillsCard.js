const SkillsCard = () => {
  return (
    <div className="skills-card p-20 bg-white rad-10 mt-20">
      <h2 className="mt-0 mb-10">My Skills</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
      <ul className="m-0 txt-c-mobile">
        <li>
          <span>HTML</span>
          <span>NodeJs</span>
          <span>PhP</span>
        </li>
        <li>
          <span>Css</span>
          <span>Sass</span>
          <span>Tailwind</span>
          <span>Bootstrap</span>
        </li>
        <li>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Vuejs</span>
          <span>Reactjs</span>
        </li>
        <li>
          <span>Unit Testing</span>
          <span>Problem Solving</span>
          <span>Git-Github</span>
        </li>
        <li>
          <span>Multi-lingual</span>
          <span>Soft-skills</span>
          <span>communication</span>
        </li>
      </ul>
    </div>
  );
};

export default SkillsCard;
