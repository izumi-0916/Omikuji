'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '吉', 'きち', '中吉', '中吉', '小吉', '小吉', '末吉', '末吉', '凶'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
  });
}