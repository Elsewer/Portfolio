/* ================================
A. CHANGE THEME (Dark / Light)
================================ */
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* ================================
B. EDIT JOB TITLE
================================ */
document.getElementById("editTitleBtn").addEventListener("click", () => {
  const jobTitle = document.querySelector(".job-title");
  const newTitle = prompt("Enter new job title:", jobTitle.textContent);
  if (newTitle !== null && newTitle.trim() !== "") {
    jobTitle.textContent = newTitle;
  }
});

/* ================================
C. SHOW / HIDE SKILLS
================================ */
document.getElementById("toggleSkillsBtn").addEventListener("click", () => {
  const skills = document.querySelector(".skills");
  skills.style.display = skills.style.display === "none" ? "block" : "none";
});

/* ================================
D. LIVE CHARACTER COUNTER
================================ */
const message = document.getElementById("message");
const counter = document.getElementById("charCount");

message.addEventListener("input", () => {
  const remaining = 200 - message.value.length;
  counter.textContent = remaining + " characters left";
});

/* ================================
E. FORM VALIDATION
================================ */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  const name = document.querySelector("input[name='name']").value.trim();
  const email = document.querySelector("input[name='email']").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in both Name and Email.");
    e.preventDefault();
  }
});

/* ================================
F. TODAY'S DATE IN FOOTER
================================ */
const today = new Date();
document.getElementById("date").textContent =
  today.toLocaleDateString();

/* ================================
G. EXTRA FEATURE: PROFILE IMAGE CLICK ZOOM
================================ */
document.querySelector(".profile-img").addEventListener("click", function () {
  this.classList.toggle("zoom");
});
