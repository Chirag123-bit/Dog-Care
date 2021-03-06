const openMenu = document.getElementById("hamburger");
const mainMenu = document.querySelector("#head-top");

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("#head-top");
  if (!header.classList.contains("show")) {
    header.classList.toggle("sticky", window.scrollY > 10);
  } else {
    mainMenu.classList.toggle("show");
    header.classList.toggle("sticky", window.scrollY > 10);
  }
});

window.onload = function () {
  var i = 0;
  text = "Your Pets!";
  function type() {
    if (i == 0) {
      document.getElementById("moving-text").innerHTML = text.charAt(i);
      i++;
      setTimeout(type, 500);
    } else if (i < text.length) {
      document.getElementById("moving-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 500);
    }
  }
  type();
};

openMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("show");
});
