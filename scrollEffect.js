//jshint esversion:6
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight;

document.addEventListener('scroll', function() {
  let progressHeight = (window.pageYOffset /
  totalHeight) * 100;
  progress.style.height = progressHeight + "%";
});
