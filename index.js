$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

anime.timeline({loop: false})
  .add({
    targets: '.home .woven',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 5000,
    delay: (el, i) => 5000 * i
  }).add({
    targets: '',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 5000,
    delay: (el, i) => 5000 * i
  });