function displayDate() {
  document.getElementById("demo").innerHTML = Date();
  document.getElementsByTagName("button")[0].addEventListener("click");
  // const footer = document.querySelectorAll('footer')
}
window.addEventListener("resize", () => {
  document.getElementsById("demo").innerHTML = "YOU RESIZED THE WINDOW!";
});
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "v":
      document.body.style.backgroundColor = "violet";
      break;
    case "w":
      document.body.style.backgroundColor = "white";
      break;
    case "w":
      document.body.style.backgroundColor = "salmon";
      break;
    case "w":
      document.body.style.backgroundColor = "orange";
      break;
    case "w":
      document.body.style.backgroundColor = "grey";
      break;
    case "w":
  }
});
