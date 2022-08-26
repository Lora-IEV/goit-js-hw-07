import { galleryItems } from './gallery-items.js';
/* 1. Создание и рендер разметки по массиву данных galleryItems
 и предоставленному шаблону элемента галереи.
 */

const gallery = document.querySelector('.gallery');
const images = createCards(galleryItems);
gallery.insertAdjacentHTML('beforeend', images);
gallery.addEventListener('click', imgClick);

function createCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');
}
 

function imgClick(event) {
    event.preventDefault();

    const swatch = event.target.classList.contains('gallery__image');
    
    if (!swatch) {
        return;
    }
    
    const swatchEl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img class="modal__image" src="${swatchEl}"/>`);
    instance.show();

  window.addEventListener("keydown", onEsc);

  function onEsc(event) {
  const ESC_KEY_CODE = "Escape";

    if (event.code === ESC_KEY_CODE) {
      
      instance.close();
      window.removeEventListener("keydown", onEsc)
    }
}
}



console.log(galleryItems);

