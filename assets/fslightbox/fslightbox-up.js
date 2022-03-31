const images = document.querySelectorAll('.post-content img');

// Lightbox function
images.forEach(function (image) {
  var wrapper = document.createElement('a');
  wrapper.setAttribute('data-no-swup', '');
  wrapper.setAttribute('data-fslightbox', '');
  wrapper.setAttribute('href', image.src);
  wrapper.setAttribute('aria-label', 'Click for Lightbox');
  image.parentNode.insertBefore(wrapper, image.parentNode.firstChild);
  wrapper.appendChild(image);
});

refreshFsLightbox();
