let html = document.querySelector("html");
let btn = document.getElementById("theme-button");

window.addEventListener("unload", () => {
  localStorage.setItem(
    "theme-dark",
    html.classList.contains("theme-dark") ? 1 : 0
  );
});

if (localStorage.getItem("theme-dark") == 1) {
  html.classList.add("theme-dark");
}

btn.addEventListener("click", function () {
  html.classList.toggle("theme-dark");
});
