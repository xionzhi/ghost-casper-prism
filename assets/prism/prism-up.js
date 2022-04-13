// Detect if we have code tags on the page.

var codeElement =  document.querySelector("pre > code");

if (typeof(codeElement) != 'undefined' && codeElement != null)
{
  // Create CSS Element
  var prismCSS = document.createElement('link');
  prismCSS.rel = "stylesheet";
  prismCSS.type = "text/css";
  prismCSS.href = "/assets/prism/prism.css?v=1"

  // Create PrismJS Element
  var prismScript = document.createElement('script');
  prismScript.type='text/javascript';
  prismScript.src="/assets/prism/prism.js?v=1";

  // Set Components Folder because of asynch script loading
  prismScript.onload = function() {
    Prism.plugins.autoloader.languages_path = '/assets/prism/components/';
  };

  // Load script and css in the DOM
  document.head.appendChild(prismCSS);
  document.head.appendChild(prismScript);
}