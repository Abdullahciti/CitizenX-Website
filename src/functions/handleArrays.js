const handleArrays = (e) => {

    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove()

    } else {
        // document.querySelector(".tasks").appendChild(trashArray[0])
        e.target.parentElement.classList.toggle("done")
    }

}
 
export default handleArrays;