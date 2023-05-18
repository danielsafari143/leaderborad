const addScore = async (arg, user, score) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${arg}/scores`,
  {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user,
      score,
    }),
  })
  .then((response) => response.json())
  .then((response) => response);
export default addScore;