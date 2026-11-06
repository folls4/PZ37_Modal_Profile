const dialog = document.querySelector("#name-dialog");
const openButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const cancelButton = document.querySelector("#cancel-dialog");
const form = document.querySelector("#name-form");
const input = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const errorMessage = document.querySelector("#form-error");
function openNameDialog() {
  input.value = profileName.textContent;
  errorMessage.textContent = "";
  if (!dialog.open) dialog.showModal();
  input.focus();
}
function closeNameDialog() {
  errorMessage.textContent = "";
  dialog.close();
}
openButton.addEventListener("click", openNameDialog);
closeButton.addEventListener("click", closeNameDialog);
cancelButton.addEventListener("click", closeNameDialog);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (value === "") {
    errorMessage.textContent = "Введите имя — пустое значение не сохранено.";
    input.focus();
    return;
  }
  profileName.textContent = value;
  document.querySelector(".avatar").textContent = value.charAt(0).toLocaleUpperCase("ru-RU");
  closeNameDialog();
});
dialog.addEventListener("close", () => {
  errorMessage.textContent = "";
});
