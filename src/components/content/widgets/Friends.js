<<<<<<< HEAD
// Motion to improve ux
import { motion } from "framer-motion";

import {
  teamTwo,
  teamEight,
  avatarOne,
  avatarTwo,
  avatarThree,
  avatarFour,
  avatarFive,
  avatarSix,
  Avatar,
} from "../../../assets/index.js";
import FriendCard from "./friends/FriendCard.js";

const Friends = () => {
  return (
    <div className="friends">
      <div className="content w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="p-relative">Friends</h1>
          <div className="friends-page d-grid m-20 gap-20">
            <FriendCard
              src={Avatar}
              name={"CitizenX"}
              title={"Frontend Developer"}
              friendsNum={24}
              projNum={13}
              artNum={3}
              type={"VIP"}
              date={"01/01/2022"}
              link={"/profile"}
            />
            <FriendCard
              src={avatarSix}
              name={"Daniel"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"John"}
              title={"UI/UX Designer"}
              friendsNum={10}
              projNum={3}
              artNum={1}
              type={""}
              date={"02/15/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"Emily"}
              title={"Frontend Engineer"}
              friendsNum={5}
              projNum={1}
              artNum={0}
              type={""}
              date={"03/05/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Sophia"}
              title={"Backend Developer"}
              friendsNum={8}
              projNum={4}
              artNum={0}
              type={""}
              date={"04/20/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Daniel"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"John"}
              title={"Frontend Engineer"}
              friendsNum={5}
              projNum={3}
              artNum={1}
              type={""}
              date={"05/12/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Alice"}
              title={"UI/UX Designer"}
              friendsNum={8}
              projNum={1}
              artNum={2}
              type={""}
              date={"07/20/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Michael"}
              title={"Software Engineer"}
              friendsNum={6}
              projNum={2}
              artNum={1}
              type={""}
              date={"12/01/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Emma"}
              title={"Product Manager"}
              friendsNum={9}
              projNum={3}
              artNum={0}
              type={""}
              date={"02/22/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Sophia"}
              title={"Full Stack Developer"}
              friendsNum={10}
              projNum={4}
              artNum={0}
              type={""}
              date={"10/08/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Oliver"}
              title={"Data Scientist"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"03/15/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Ella"}
              title={"Backend Developer"}
              friendsNum={8}
              projNum={3}
              artNum={0}
              type={""}
              date={"04/30/2024"}
            />
            <FriendCard
              src={avatarFour}
              name={"William"}
              title={"Cybersecurity Analyst"}
              friendsNum={5}
              projNum={2}
              artNum={1}
              type={""}
              date={"06/10/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Ava"}
              title={"Graphic Designer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"08/05/2024"}
            />
            <FriendCard
              src={avatarOne}
              name={"Liam"}
              title={"Software Architect"}
              friendsNum={6}
              projNum={3}
              artNum={0}
              type={""}
              date={"09/18/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Mia"}
              title={"Frontend Developer"}
              friendsNum={9}
              projNum={2}
              artNum={1}
              type={""}
              date={"11/24/2024"}
            />
            <FriendCard
              src={avatarTwo}
              name={"Benjamin"}
              title={"Cloud Engineer"}
              friendsNum={7}
              projNum={3}
              artNum={0}
              type={""}
              date={"01/07/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Charlotte"}
              title={"Data Analyst"}
              friendsNum={8}
              projNum={2}
              artNum={0}
              type={""}
              date={"03/02/2024"}
            />
            <FriendCard
              src={avatarFour}
              name={"Alexander"}
              title={"Mobile App Developer"}
              friendsNum={6}
              projNum={2}
              artNum={1}
              type={""}
              date={"04/16/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Scarlett"}
              title={"Systems Analyst"}
              friendsNum={7}
              projNum={3}
              artNum={0}
              type={""}
              date={"06/28/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"James"}
              title={"UI/UX Designer"}
              friendsNum={9}
              projNum={2}
              artNum={0}
              type={""}
              date={"08/14/2024"}
            />
            <FriendCard
              src={avatarThree}
              name={"Grace"}
              title={"Software Developer"}
              friendsNum={7}
              projNum={3}
              artNum={1}
              type={""}
              date={"10/30/2024"}
            />
            <FriendCard
              src={avatarOne}
              name={"Henry"}
              title={"Web Developer"}
              friendsNum={8}
              projNum={2}
              artNum={0}
              type={""}
              date={"12/12/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Lily"}
              title={"Backend Engineer"}
              friendsNum={6}
              projNum={2}
              artNum={0}
              type={""}
              date={"02/05/2024"}
            />
            <FriendCard
              src={avatarThree}
              name={"Logan"}
              title={"Software Engineer"}
              friendsNum={7}
              projNum={3}
              artNum={0}
              type={""}
              date={"04/01/2024"}
            />
            <FriendCard
              src={avatarSix}
              name={"Chloe"}
              title={"Frontend Developer"}
              friendsNum={8}
              projNum={2}
              artNum={1}
              type={""}
              date={"05/20/2024"}
            />
            <FriendCard
              src={avatarFour}
              name={"Jackson"}
              title={"DevOps Engineer"}
              friendsNum={5}
              projNum={2}
              artNum={0}
              type={""}
              date={"07/08/2024"}
            />
            <FriendCard
              src={avatarOne}
              name={"Daniel"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Tanya"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Friends;
=======
// Motion to improve ux
import { motion } from "framer-motion";

import {
  teamTwo,
  teamEight,
  avatarOne,
  avatarTwo,
  avatarThree,
  avatarFour,
  avatarFive,
  avatarSix,
  Avatar,
} from "../../../assets/index.js";
import FriendCard from "./friends/FriendCard.js";

const Friends = () => {
  return (
    <div className="friends">
      <div className="content w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="p-relative">Friends</h1>
          <div className="friends-page d-grid m-20 gap-20">
            <FriendCard
              src={Avatar}
              name={"CitizenX"}
              title={"Frontend Developer"}
              friendsNum={24}
              projNum={13}
              artNum={3}
              type={"VIP"}
              date={"01/01/2022"}
              link={"/profile"}
            />
            <FriendCard
              src={avatarSix}
              name={"Daniel"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"John"}
              title={"UI/UX Designer"}
              friendsNum={10}
              projNum={3}
              artNum={1}
              type={""}
              date={"02/15/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"Emily"}
              title={"Frontend Engineer"}
              friendsNum={5}
              projNum={1}
              artNum={0}
              type={""}
              date={"03/05/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Sophia"}
              title={"Backend Developer"}
              friendsNum={8}
              projNum={4}
              artNum={0}
              type={""}
              date={"04/20/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Daniel"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"John"}
              title={"Frontend Engineer"}
              friendsNum={5}
              projNum={3}
              artNum={1}
              type={""}
              date={"05/12/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Alice"}
              title={"UI/UX Designer"}
              friendsNum={8}
              projNum={1}
              artNum={2}
              type={""}
              date={"07/20/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Michael"}
              title={"Software Engineer"}
              friendsNum={6}
              projNum={2}
              artNum={1}
              type={""}
              date={"12/01/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Emma"}
              title={"Product Manager"}
              friendsNum={9}
              projNum={3}
              artNum={0}
              type={""}
              date={"02/22/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Sophia"}
              title={"Full Stack Developer"}
              friendsNum={10}
              projNum={4}
              artNum={0}
              type={""}
              date={"10/08/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Oliver"}
              title={"Data Scientist"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"03/15/2024"}
            />
            <FriendCard
              src={teamTwo}
              name={"Ella"}
              title={"Backend Developer"}
              friendsNum={8}
              projNum={3}
              artNum={0}
              type={""}
              date={"04/30/2024"}
            />
            <FriendCard
              src={avatarFour}
              name={"William"}
              title={"Cybersecurity Analyst"}
              friendsNum={5}
              projNum={2}
              artNum={1}
              type={""}
              date={"06/10/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Ava"}
              title={"Graphic Designer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"08/05/2024"}
            />
            <FriendCard
              src={avatarOne}
              name={"Liam"}
              title={"Software Architect"}
              friendsNum={6}
              projNum={3}
              artNum={0}
              type={""}
              date={"09/18/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Mia"}
              title={"Frontend Developer"}
              friendsNum={9}
              projNum={2}
              artNum={1}
              type={""}
              date={"11/24/2024"}
            />
            <FriendCard
              src={avatarTwo}
              name={"Benjamin"}
              title={"Cloud Engineer"}
              friendsNum={7}
              projNum={3}
              artNum={0}
              type={""}
              date={"01/07/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Charlotte"}
              title={"Data Analyst"}
              friendsNum={8}
              projNum={2}
              artNum={0}
              type={""}
              date={"03/02/2024"}
            />
            <FriendCard
              src={avatarFour}
              name={"Alexander"}
              title={"Mobile App Developer"}
              friendsNum={6}
              projNum={2}
              artNum={1}
              type={""}
              date={"04/16/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Scarlett"}
              title={"Systems Analyst"}
              friendsNum={7}
              projNum={3}
              artNum={0}
              type={""}
              date={"06/28/2024"}
            />
            <FriendCard
              src={avatarFive}
              name={"James"}
              title={"UI/UX Designer"}
              friendsNum={9}
              projNum={2}
              artNum={0}
              type={""}
              date={"08/14/2024"}
            />
            <FriendCard
              src={avatarThree}
              name={"Grace"}
              title={"Software Developer"}
              friendsNum={7}
              projNum={3}
              artNum={1}
              type={""}
              date={"10/30/2024"}
            />
            <FriendCard
              src={avatarOne}
              name={"Henry"}
              title={"Web Developer"}
              friendsNum={8}
              projNum={2}
              artNum={0}
              type={""}
              date={"12/12/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Lily"}
              title={"Backend Engineer"}
              friendsNum={6}
              projNum={2}
              artNum={0}
              type={""}
              date={"02/05/2024"}
            />
            <FriendCard
              src={avatarThree}
              name={"Logan"}
              title={"Software Engineer"}
              friendsNum={7}
              projNum={3}
              artNum={0}
              type={""}
              date={"04/01/2024"}
            />
            <FriendCard
              src={avatarSix}
              name={"Chloe"}
              title={"Frontend Developer"}
              friendsNum={8}
              projNum={2}
              artNum={1}
              type={""}
              date={"05/20/2024"}
            />
            <FriendCard
              src={avatarFour}
              name={"Jackson"}
              title={"DevOps Engineer"}
              friendsNum={5}
              projNum={2}
              artNum={0}
              type={""}
              date={"07/08/2024"}
            />
            <FriendCard
              src={avatarOne}
              name={"Daniel"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
            <FriendCard
              src={teamEight}
              name={"Tanya"}
              title={"React Developer"}
              friendsNum={7}
              projNum={2}
              artNum={0}
              type={""}
              date={"01/03/2024"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Friends;
>>>>>>> 48aa0c7312dc6ee60dc9894d78e4d20dc9fc5138
