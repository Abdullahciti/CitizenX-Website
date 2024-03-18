const handleToDoList = (e) => {

    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    } else if (e.target.classList.contains("done") || e.target.parentElement.classList.contains("done")) {
        e.target.classList.remove("done")
        e.target.parentElement.classList.remove("done")
    } else {
        e.target.parentElement.classList.toggle("done")
    }

}
 
export default handleToDoList;