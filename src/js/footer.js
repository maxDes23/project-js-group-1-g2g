async function openCreatorGallery() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';

  const gallery = modal.querySelector('.gallery');
  await Promise.all(
    creatorPhotos.map(async photoUrl => {
      const image = document.createElement('img');
      image.src = await loadImage(photoUrl);
      gallery.appendChild(image);
    })
  );
}

async function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(url);
    image.src = url;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const showGalleryButton = document.getElementById('showGalleryButton');
  showGalleryButton.addEventListener('click', openCreatorGallery);
});
