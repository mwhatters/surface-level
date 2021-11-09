$(function() {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getRandomFloat = (max) => {
    return Math.random() * max;
  }

  const generateBirds = () => {
    for (i = 0; i < 40; i++) {
      $('.bird-wrapper').append(`<div class='bird' style='top: ${getRandomInt(1500)}px; animation-delay: ${getRandomFloat(20)}s'></div>`)
    }
  }

  const generateBaseWindows = () => {
    let windows = $('.windows.mid').first();
    let order = ['m', 'lm', 'l', 'lm', 'm', 'd'];

    order.forEach((colorClass) => {
      for (i = 0; i < 20; i++) {
        $(windows).append(`<div class='cell window ${colorClass}'></div>`)
      }
    });
  }

  generateBaseWindows();
  generateBirds();
})