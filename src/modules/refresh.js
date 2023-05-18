const update = async (arg) => {
  const values = await arg;
  const ulItem = document.getElementById('listScore');
  ulItem.innerHTML = '';
  for (let i = 0; i < values.result.length; i += 1) {
    ulItem.innerHTML += `<li><p>${values.result[i].user}</p> : ${values.result[i].score}</li>`;
  }
};

export default update;