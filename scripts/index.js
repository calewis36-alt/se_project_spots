const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const editProfileFormElement = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editDescriptionInput = editProfileModal.querySelector("#profile-description-input");


const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostFormElement = newPostModal.querySelector(".modal__form");
const newPostImageLink = newPostModal.querySelector("#card-image-input");
const newPostImageCaption = newPostModal.querySelector("#card-image-caption");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");

const PostImageLink = document.querySelector(".card__image");
const PostImageCaption = document.querySelector("card__title");

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened")
  editProfileNameInput.value = profileNameElement.textContent;
  editDescriptionInput.value = profileDescriptionElement.textContent;
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened")
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened")
  newPostImageLink.value = PostImageLink.textContent;
  newPostImageCaption.value = PostImageCaption.textContent;
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened")
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened")
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  PostImageLink.textContent = newPostImageLink.value
  PostImageCaption.textContent = newPostImageCaption.value;
}

newPostFormElement.addEventListener('submit', handleAddCardSubmit);

initialCards.forEach(function (card,) {
  console.log(card.name);
  console.log(card.link);
});