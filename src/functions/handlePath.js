const handlPath = () => {
  const currentPath = window.location.pathname;
  if (currentPath) {
    document
      .querySelectorAll("ul li a")
      .forEach((a) => a.classList.remove("active"));
    document.querySelectorAll("ul li a span").forEach((span) => {
      if (
        `/${span.innerHTML.toLocaleLowerCase()}` ===
        window.location.pathname.toLocaleLowerCase()
      ) {
        span.parentElement.classList.add("active");
      }
    });
  }
  if(currentPath === "/"){
    document.querySelector("ul li a").classList.add("active");
  }
};

export default handlPath;
