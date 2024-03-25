import {
  teamFive,
  teamFour,
  teamOne,
  teamThree,
  teamTwo,
} from "../../../../assets";

const ProjectsTable = () => {
  return (
    <div className="projects p-20 bg-mainMode rad-10">
      <h2 className="mt-0 mb-20">Projects</h2>
      <div className="responsive-table">
        <table className="fs-15 w-full">
          <thead>
            <tr>
              <td>Name</td>
              <td>Finish Date</td>
              <td>Client</td>
              <td>Price</td>
              <td>Team</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wikipedia</td>
              <td>10 May 2023</td>
              <td>UA</td>
              <td>$5300</td>
              <td>
                <img decoding="async" src={teamOne} alt="" />
                <img decoding="async" src={teamTwo} alt="" />
                <img decoding="async" src={teamFour} alt="" />
                <img decoding="async" src={teamFive} alt="" />
              </td>
              <td>
                <span className="label btn-shape bg-orange c-white">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td>Estate II</td>
              <td>12 Jan 2024</td>
              <td>GbmH Company</td>
              <td>$1500</td>
              <td>
                <img decoding="async" src={teamOne} alt="" />
                <img decoding="async" src={teamTwo} alt="" />
                <img decoding="async" src={teamFive} alt="" />
              </td>
              <td>
                <span className="label btn-shape bg-mainColor c-white">
                  In Progress
                </span>
              </td>
            </tr>
            <tr>
              <td>Scissor Game</td>
              <td>05 Sep 2022</td>
              <td>JavaScript</td>
              <td>Free</td>
              <td>
                <img decoding="async" src={teamTwo} alt="" />
                <img decoding="async" src={teamThree} alt="" />
              </td>
              <td>
                <span className="label btn-shape bg-green c-white">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>CitizenX Website</td>
              <td>20 Oct 2023</td>
              <td>TopC</td>
              <td>$600</td>
              <td>
                <img decoding="async" src={teamOne} alt="" />
                <img decoding="async" src={teamTwo} alt="" />
              </td>
              <td>
                <span className="label btn-shape bg-green c-white">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>Fashion Website</td>
              <td>24 Feb 2024</td>
              <td>John</td>
              <td>$---</td>
              <td>
                <img decoding="async" src={teamFive} alt="" />
                <img decoding="async" src={teamFour} alt="" />
              </td>
              <td>
                <span className="label btn-shape bg-red c-white">Rejected</span>
              </td>
            </tr>
            <tr>
              <td>Bondi Website</td>
              <td>01 Mar 2022</td>
              <td>Home Office</td>
              <td>Free</td>
              <td>
                <img decoding="async" src={teamOne} alt="" />
                <img decoding="async" src={teamTwo} alt="" />
                <img decoding="async" src={teamThree} alt="" />
                <img decoding="async" src={teamFive} alt="" />
              </td>
              <td>
                <span className="label btn-shape bg-green c-white">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
