'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 6);
    // btn.textContent = n;

    switch (n) {
      case 0:
        btn.textContent = '大吉';
        break;
      case 1:
        btn.textContent = '吉';
        break;
      case 2:
        btn.textContent = '中吉';
        break;
      case 3:
        btn.textContent = '小吉';
        break;
      case 4:
        btn.textContent = '末吉';
        break;
      case 5:
        btn.textContent = '凶';
        break;
    }
  });
}