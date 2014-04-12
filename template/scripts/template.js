// Put your javascript functions in this file

function setUpForm() {
  console.log("Running setUpForm");
  formLink = document.getElementById('formLink');
  responseForm = document.getElementById('responseForm');
  responseForm.style.visibility = "collapse";
  formLink.addEventListener("click", showForm, false);
}

function showForm() {
  console.log("Running showForm");
  responseForm = document.getElementById('responseForm');
  responseForm.style.visibility = "visible";

}

function initializePage() {

  // this function is used to perform any scripts needed on the page.
  console.log("Running initializePage");
  setUpForm();

} 