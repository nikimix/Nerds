const btnWriteToUs = document.querySelector(".btn-write-to-us");
const modalWindow = document.querySelector(".modal-window");
const form = modalWindow.querySelector(".form");
const modalClose = modalWindow.querySelector(".modal-close");
const userName = modalWindow.querySelector("[name=user-name]");
const userMail = modalWindow.querySelector("[name=user-mail]");
const textMessage = modalWindow.querySelector(".field-text-message");
let storageUserName = localStorage.getItem("userName");
let storageUserMail = localStorage.getItem("userMail");
let storage = "";
let isStorageSupport = true;

// проверка наличия локального хранилища
try {
  storage = localStorage.getItem("userName");
}
catch (err) {
  isStorageSupport = false;
}

// добовляем обработчик событий кнопке "напишите нам"
btnWriteToUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("modal-show");
  if (storageUserName && storageUserMail) {
    userName.value = storageUserName;
    userMail.value = storageUserMail;
    textMessage.focus();
  }
  else {
    userName.focus();
  }
})

// делаем проверку пустых полей
form.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value) {
    evt.preventDefault();
    modalWindow.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userMail", userMail.value);
    }
  }
})

// добавил обработчик событий кнопке "закрыть" модальное окно
modalClose.addEventListener("click", function () {
  modalWindow.classList.remove("modal-show");
  modalWindow.classList.remove("modal-error");
})

// кнопкой "esc" закрыть модальное окно
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWindow.classList.remove("modal-show");
      modalWindow.classList.remove("modal-error");
    }
    else {
      evt.preventDefault();
    }
  }
})

