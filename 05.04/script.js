const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
