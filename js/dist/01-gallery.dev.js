"use strict";

var _galleryItems = require("./gallery-items.js");

/* 1. Создание и рендер разметки по массиву данных galleryItems
 и предоставленному шаблону элемента галереи.
 */
var gallery = document.querySelector('.gallery');
var images = createCards(_galleryItems.galleryItems);
gallery.insertAdjacentHTML('beforeend', images);
gallery.addEventListener('click', imgClick);

function createCards(galleryItems) {
  return galleryItems.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "\n        <div class=\"gallery__item\">\n  <a class=\"gallery__link\" href=\"large-image.jpg\">\n    <img\n      class=\"gallery__image\"\n      src=\"".concat(preview, "\"\n      data-source=\"").concat(original, "\"\n      alt=\"").concat(description, "\"\n    />\n  </a>\n</div>\n");
  }).join('');
}

function imgClick(event) {
  event.preventDefault();
  var swatch = event.target.classList.contains('gallery__image');

  if (!swatch) {
    return;
  }

  var swatchEl = event.target.dataset.source;
  var instance = basicLightbox.create("<img class=\"modal__image\" src=\"".concat(swatchEl, "\"/>"));
  instance.show();
  window.addEventListener("keydown", onEsc);

  function onEsc(event) {
    var ESC_KEY_CODE = "Escape";

    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEsc);
    }
  }
}

console.log(_galleryItems.galleryItems);