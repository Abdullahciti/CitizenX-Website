
// const handleNoti = (e) => {

//     document.location.pathname('/plans') // go to this 
//     return e.currentTarget.classList.add("active")
    
// }
 
// export default handleNoti;
const handleNoti = (e) => {
    // window.location.pathname = '/plans'; // Navigate to '/plans'
    e.currentTarget.classList.add("active");
};

export default handleNoti;
