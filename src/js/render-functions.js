import SimpleLightbox from 'simplelightbox';
let lightbox;

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <p>Likes ${img.likes}</p>
          <p>Views ${img.views}</p>
          <p>Comments ${img.comments}</p>
          <p>Downloads ${img.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}
export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('hidden');
}
export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('hidden');
}
