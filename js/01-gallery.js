import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
galleryEl.addEventListener('click', handleImgClick)

function handleImgClick(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return;
  }

const instance = basicLightbox.create(
	document.querySelector('.gallery a')
)
instance.show()
}

const makeGalleryGrid = ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const markupGallery = galleryItems.map(e => makeGalleryGrid(e)).join('');
galleryEl.insertAdjacentHTML('afterbegin', markupGallery)
