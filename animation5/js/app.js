anime({
    targets: '.box2',
    translateX: 350,
    rotateZ: 360,
    duration: 2000,
    loop: true,
    delay: 1000,
    endDelay: 500,
    direction: 'alternate',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    delay: function(box2, i, l) {
      return i * 100;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 100;
    }
  });