var codeElement = document.querySelector(".post-content img");

if (typeof(codeElement) != 'undefined' && codeElement != null)
{
  // load 
  var fslightboxScript = document.createElement('script');
  fslightboxScript.type='text/javascript';
  fslightboxScript.src="/assets/fslightbox/fslightbox.js?v=1";
  fslightboxScript.onload = function() {};
  document.head.appendChild(fslightboxScript);

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
}
