const modeBtn = document.querySelector(".mode button");
const header = document.querySelector("header");
const home = document.querySelector(".home");
const btn = document.querySelectorAll("a.btn");
const headerAnchors = header.querySelectorAll("a");
const title = document.querySelectorAll(".title");
const about = document.querySelector(".about");
const horizontalRule = document.querySelectorAll(".horizonatal-rule ");
const skillDiv = document.querySelector(".skill-div");
const experienceDiv = document.querySelector(".experience-div");
const blogSection = document.querySelector(".blog-section");
const contactSection = document.querySelector(".contact-section");

//Set the mode for the browser;
function changeMode() {
  if (localStorage.getItem("data-theme") === "dark") {
    localStorage.setItem("data-theme", "light");
    modeBtn.innerHTML = `<i class="bx bxs-moon"></i>`;
  } else {
    localStorage.setItem("data-theme", "dark");
    modeBtn.innerHTML = `<i class="bx bxs-sun"></i>`;
  }

  addModeFunc(document.body);
  addModeFunc(modeBtn);
  addModeFunc(header);
  addModeFunc(home);
  btn.forEach((b) => addModeFunc(b));
  title.forEach((t) => addModeFunc(t));
  addModeFunc(about);
  horizontalRule.forEach((rule) => addModeFunc(rule));
  addModeFunc(skillDiv);
  addModeFunc(experienceDiv);
  addModeFunc(blogSection);
  addModeFunc(contactSection);
}

modeBtn.addEventListener("click", changeMode);

//Window DOMContentLoaded Event Listener
window.addEventListener("DOMContentLoaded", () => {
  //Automatically sets the default theme if not set.
  localStorage.getItem("data-theme") === null
    ? localStorage.setItem("data-theme", "dark")
    : localStorage.setItem("data-theme", localStorage.getItem("data-theme"));

  addModeFunc(document.body);
  addModeFunc(modeBtn);
  addModeFunc(header);
  addModeFunc(home);
  btn.forEach((b) => addModeFunc(b));
  title.forEach((t) => addModeFunc(t));
  addModeFunc(about);
  horizontalRule.forEach((rule) => addModeFunc(rule));
  addModeFunc(skillDiv);
  addModeFunc(experienceDiv);
  addModeFunc(blogSection);
  addModeFunc(contactSection);

  //Checked for any hashed url;
  const currentHash = window.location.hash;
  if (currentHash) {
    const activeLink = document.querySelector(
      `header a[href="${currentHash}"]`
    );
    activeLink ? activeLink.classList.add("active") : null;
  }
});

//Function that adds either a dark class or a light class;
function addModeFunc(element) {
  if (localStorage.getItem("data-theme") === "dark") {
    element.classList.add("dark");
    element.classList.remove("light");
  } else {
    element.classList.add("light");
    element.classList.remove("dark");
  }
}

//Adds an active class when a navigation link is clicked
headerAnchors.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    //Removes all active class
    headerAnchors.forEach((a) => a.classList.remove("active"));
    header.classList.remove("open");

    //Adds the active class to the clicked link
    this.classList.add("active");
  });
});

//Open and Close Navigation;
const bar = document.getElementById("bar");
bar.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    this.innerHTML = `<i class="bx bx-menu"></i>`;
  } else {
    header.classList.add("open");
    this.innerHTML = `<i class='bx bx-x'></i>`;
  }
});
