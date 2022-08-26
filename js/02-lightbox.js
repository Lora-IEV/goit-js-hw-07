import { galleryItems } from './gallery-items.js';
// Change code below this line

const img = ({ preview, original, description }) => {

    const link = document.createElement('a');

    link.classList.add('gallery_link');
    link.href = `${original}`;

    const image = document.createElement('img');
        
    image.classList.add('gallery__image');
    image.src = `${preview}`;
    image.alt = `${description}`;
    link.append(image);
    
    return link;
}

const card = galleryItems.map(img);

const gallery = document.querySelector('.gallery');
gallery.append(...card);

gallery.addEventListener('click', clickedImg)

function clickedImg (event) {
    block(event)
}

function block(event) {
    event.preventDefault()
}



var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    // animationSpeed: 250,
    // captionPosition: "bottom", 
});

function imgClick(event) {
    event.preventDefault();

    const swatch = event.target.classList.contains('gallery__image');
    
    if (!swatch) {
        return;
    }
    
    const swatchEl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img class="modal__image" src="${swatchEl}"/>`);
    instance.show();


}






console.log(galleryItems);
