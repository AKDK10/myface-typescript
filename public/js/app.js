document.addEventListener("DOMContentLoaded", function () {

});

const navBarButton = document.getElementById("nav-bar-button");
navBarButton.addEventListener("click", function() {
  const navBarMenu = document.getElementById("nav-links-container");
  const icon = document.getElementById("button-icon");
  if((navBarMenu).classList.contains("open")) {
    navBarMenu.style.display = "none";
    navBarMenu.classList.replace("open", "close");
    icon.classList.replace("fa-times","fa-bars");
  } else {
    navBarMenu.style.display = "flex";
    navBarMenu.classList.replace("close","open");
    icon.classList.replace("fa-bars","fa-times");
  }
  
  
})


const changeColourBtn = document.querySelector(".change-colour-btn");
const posts = document.getElementsByClassName("post");

  changeColourBtn.addEventListener("click",function(){
    for(let post of posts){

      const red = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      
      console.log(red)
      post.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

    
})
