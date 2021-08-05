'use strict';
let commentForm = document.querySelector('.comment-block__form');
let commentList = document.querySelector('.comment-block__container');
let commentField = document.querySelector('.comment-block__form-textarea');
let comment = document.querySelector('.comment-block__message')

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let comment = document.querySelector('.comment-block__message--two');
  let cloneElement = comment.cloneNode(true)
  let message = cloneElement.querySelector('.comment-block__text--self')
  message.textContent = commentField.value;
  commentField.value = '';

  commentList.appendChild(cloneElement);
};
