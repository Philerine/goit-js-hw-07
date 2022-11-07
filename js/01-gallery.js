import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markupArr = galleryItems
    .map(({preview, original, description
}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');


galleryRef.insertAdjacentHTML('beforeend', markupArr);

galleryRef.addEventListener('click', onOpenModal);
galleryRef.addEventListener('keydown', onCloseModal);

let instance;

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();
}

function onCloseModal(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

console.log(galleryItems);
