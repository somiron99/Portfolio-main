

function logo() {
  let logo = document.querySelector(".logo");
  let hv = document.querySelector(".nav .logo .b");
  logo.addEventListener("mouseenter", () => {
    hv.style.backgroundColor = "rgb(194, 7, 7)";
  });

  logo.addEventListener("mouseleave", () => {
    hv.style.backgroundColor = "";
  });
  
}

logo();

Shery.mouseFollower(".main");
Shery.makeMagnet(".nav .logo .b");
Shery.makeMagnet(".right .con i");
Shery.makeMagnet(".left .aa img");
Shery.makeMagnet(".left .aaa img");
