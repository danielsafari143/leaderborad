const create = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'real game',
      }),
    }).then((responce) => responce);
};

export default create;