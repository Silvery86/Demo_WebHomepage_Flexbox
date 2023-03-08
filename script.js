function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
      menu.style.height = "50px";
      
    } else {
      menu.style.display = "none";
      menu.style.height = "0";
    }
  }
  
  const maxWidth = 1024;
  const element = document.getElementById("menu");
 
window.addEventListener("resize", (event) => {});
    onresize = (event) =>{
    const viewportWidth = window.screen.width;
    console.log(viewportWidth);
    if (viewportWidth > maxWidth) {
      element.style.display =  "flex";
      element.style.height = "50px";
    } else {
      element.style.display =  "none";
      element.style.height = "0";
    }
  };
  
