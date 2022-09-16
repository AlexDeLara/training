const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
  });