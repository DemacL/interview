var name = '1';
(function () {
  if (typeof name === 'undefined') {
    var name = 2;
    console.log('hello1-' + name);
  } else {
    console.log('hello2-' + name);
  }
})()