window.addEventListener("scroll", function () {
  var header = this.document.querySelector("#head-top");
  header.classList.toggle("sticky", window.scrollY > 10);
});
