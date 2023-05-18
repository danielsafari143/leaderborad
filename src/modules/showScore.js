const getScore = async (arg) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${arg}/scores`)
  .then((response) => response.json())
  .then((response) => (response));
export default getScore;