document.querySelector("#clickMe").addEventListener("click", makeReq);

async function makeReq() {
  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`);
  const data = await res.json();

  console.log(data);

  document.querySelector("#coinFlip").textContent = data.flip;
  document.querySelector("#winlose").textContent = data.winsTiesLoses;
  document.querySelector("#wins").textContent = data.win;
  document.querySelector("#loses").textContent = data.lose;
  document.querySelector("#ties").textContent = data.tie;
}
