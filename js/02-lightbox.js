import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const imagesList = galleryItems.map(({ preview, original, description }) => {
    
return `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>`;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', imagesList);

const lightbox = new SimpleLightbox('.gallery__item', { captionsData: "alt", captionDelay: 250, });

