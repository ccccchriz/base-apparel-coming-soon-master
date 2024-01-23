document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("info-form");
  const input = form.querySelector("input");
  const error = document.getElementById("form-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value == "") {
      error.innerText = "Email cant't be empty";
    }
  });
});
