"use strict";

let modalBtn = document.querySelectorAll(".modal-btn");
let modal = document.querySelector(".modal-window");

let openModal = () => {
  modal.classList.add("modal-window_active");
};

modalBtn.forEach(el => el.addEventListener("click", openModal));
