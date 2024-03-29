import { Avatar, avatarFive, avatarFour, avatarTwo, teamFivee, teamTwoo } from "../../../../assets"
import ProjectCard from "./ProjectCard"

const allProjects = [
    <ProjectCard 
            date={"02/10/2023"}
            title={"TopC Dashboard"}
            desc={"CitizenX Website with dashboard using react"}
            src={[Avatar]}
            skills={["Programming", "Design", "Hosting", "Marketing"]}
            lvl={"w-80"}
            price={"250"}
            />,
            <ProjectCard
            srcLink={"https://portfolio-drab-nine-29.vercel.app/"}
            date={"02/10/2023"}
            title={"Abdullah`s Portofolio"}
            desc={"Abdullah`s Portofolio for job application"}
            src={[Avatar]}
            skills={["Html", "Css", "JavaScript", "React", "Git-Github"]}
            lvl={"w-50"}
            price={"180"}
            />,
            <ProjectCard
            srcLink={"https://estate-ii.vercel.app/"}
            date={"15/2/2024"}
            title={"Estate-II"}
            desc={"It`s a website for buying or renting an apartment"}
            src={[avatarFour, Avatar]}
            skills={["Clients", "React", "Buying", "Selling", "Renting"]}
            lvl={"w-75"}
            price={"75"}
            />,
            <ProjectCard
            srcLink={"https://abdullahciti.github.io/bondi-with-Bootstrap"}
            date={"15/7/2023"}
            title={"Bondi Website"}
            desc={"Website for Bondi Theme"}
            src={[teamFivee, avatarFive, Avatar, avatarTwo]}
            skills={["Html", "Css", "Bootstrap", "Vscode",]}
            lvl={"w-full"}
            price={"Free"}
            />,
            <ProjectCard
            srcLink={"https://weather-app-ochre-rho.vercel.app/"}
            date={"10/1/2024"}
            title={"Weather Now"}
            desc={"A simple application to know the weather "}
            src={[Avatar, teamTwoo]}
            skills={["Html", "tailwind", "Vue.js", "API", "UI/UX-Template",]}
            lvl={"w-75"}
            price={"Vip"}
            />,
]


export default allProjects