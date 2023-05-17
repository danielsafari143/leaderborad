import './index.css';
import getScore from './modules/showScore.js';
import update from './modules/refresh.js';
import addScore from './modules/addScore.js';

document.getElementById('refresh').addEventListener('click', () => {
  update(getScore('dQZsUfY52oMRq1GpRMfQ'));
});

document.getElementById('button').addEventListener('click', async () => {
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  const values = (await addScore('dQZsUfY52oMRq1GpRMfQ', user.value, score.value));
  document.getElementById('check').innerHTML = values.result;
  user.value = '';
  score.value = '';
});
