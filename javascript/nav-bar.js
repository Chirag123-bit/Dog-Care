window.addEventListener("scroll", function () {
  var header = this.document.querySelector("#head-top");
  header.classList.toggle("sticky", window.scrollY > 10);
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
