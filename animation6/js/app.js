anime({
  targets: '.loop',
  translateX: 270,
  // rotateZ: 360,
  loop: 3,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-infinity',
  translateX: 270,
  // rotateZ: 360,
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-reverse',
  translateX: 270,
  loop: 3,
  direction: 'reverse',
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-reverse-infinity',
  translateX: 270,
  direction: 'reverse',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-alternate',
  translateX: 270,
  loop: 3,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-alternate-infinity',
  translateX: 270,
  direction: 'alternate',
  // rotateZ: 360,
  loop: true,
  easing: 'easeInOutSine'
});