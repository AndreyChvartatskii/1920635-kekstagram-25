import { openModal } from './open-modal.js';
const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const bigPictureUrl = bigPicture.querySelector('.big-picture__img');
const bigPictureLikesCounter = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDiscription = bigPicture.querySelector('.social__caption');
const commentItem = commentsList.querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const commentsCounter = document.querySelector('.current-comment');
let count = 0;
let handleCommentsLoader;


const createComment = (comment) => {
  const commentElement = commentItem.cloneNode(true);
  const commentImage = commentElement.querySelector('.social__picture');
  commentImage.src = comment.avatar;
  commentImage.alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const downloadComment=(comments) => {
  let finishCount = count + 5;
  if (finishCount > comments.length) {
    finishCount = comments.length;
  }
  for (let i = count; i < finishCount; i++) {
    commentsList.appendChild(createComment(comments[i]));
  }
  count += 5;
  commentsCounter.textContent = finishCount;
  if (count >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', handleCommentsLoader);
    count = 0;
  }
};

const showBigPicture = ({ url, likes, comments, description }) => {
  bigPictureUrl.src = url;
  bigPictureLikesCounter.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureDiscription.textContent = description;
  commentsList.textContent = '';
  downloadComment(comments);
  commentsLoader.classList.remove('hidden');
  handleCommentsLoader = () => {
    downloadComment(comments);
  };
  commentsLoader.addEventListener('click', handleCommentsLoader);
  openModal(bigPicture, closeButton);
};

export { showBigPicture };
