// import { Link } from "react-router-dom";

const handleActive = (e, src) => {
    document.querySelectorAll(src).forEach((a) => a.classList.remove("active"));
    e.currentTarget.classList.add("active");
};

export default handleActive;
