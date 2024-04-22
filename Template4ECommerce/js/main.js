window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerElement.classList.add("scrolling");
  } else {
    headerElement.classList.remove("scrolling");
  }
});
