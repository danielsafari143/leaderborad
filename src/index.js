import './index.css';
import getScore from './modules/showScore.js';
import update from './modules/refresh.js';
import addScore from './modules/addScore.js';

document.getElementById('refresh').addEventListener('click', () => {
  update(getScore('WCFRPqcmVfA3nAltLwE7'));
});

document.getElementById('button').addEventListener('click', async () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  const values = (await addScore('WCFRPqcmVfA3nAltLwE7', user, score));
  document.getElementById('check').innerHTML = values.result;
});
