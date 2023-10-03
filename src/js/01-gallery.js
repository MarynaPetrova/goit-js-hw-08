
import { galleryItems } from './gallery-items'; 

import Simplelightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

    const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery_item">
      <a class="gallery_link" href="${original}">
      <img class="gallery_image" src="${preview}" width="440" data-source="${original}" alt="${description}"></a></li>`)
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', markup);

  var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  
console.log(lightbox);
