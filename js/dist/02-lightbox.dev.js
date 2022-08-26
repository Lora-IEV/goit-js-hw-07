"use strict";

var _galleryItems = require("./gallery-items.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Change code below this line
var img = function img(_ref) {
  var preview = _ref.preview,
      original = _ref.original,
      description = _ref.description;
  var link = document.createElement('a');
  link.classList.add('gallery_link');
  link.href = "".concat(original);
  var image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = "".concat(preview);
  image.alt = "".concat(description);
  link.append(image);
  return link;
};

var card = _galleryItems.galleryItems.map(img);

var gallery = document.querySelector('.gallery');
gallery.append.apply(gallery, _toConsumableArray(card));
gallery.addEventListener('click', clickedImg);

function clickedImg(event) {
  block(event);
}

function block(event) {
  event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250 // animationSpeed: 250,
  // captionPosition: "bottom", 

});

function imgClick(event) {
  event.preventDefault();
  var swatch = event.target.classList.contains('gallery__image');

  if (!swatch) {
    return;
  }

  var swatchEl = event.target.dataset.source;
  var instance = basicLightbox.create("<img class=\"modal__image\" src=\"".concat(swatchEl, "\"/>"));
  instance.show();
}

console.log(_galleryItems.galleryItems);