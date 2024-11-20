const error = document.getElementsByClassName("error")[0];
const success = document.getElementsByClassName("success")[0];
document.getElementById("conditions-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const {temperature, humidity, glow} = e.target.children;
  const res = await fetch("https://grow-machine.onrender.com/data/publisher", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temperature: temperature.value,
      humidity: humidity.value,
      glow: glow.value,
    }),
  });
  !res.ok? error.classList.toggle("display-none", false) : success.classList.toggle('display-none', false);
});

document.getElementById('fan').addEventListener('click', async () => {
  const pst = true;
  await fetch("https://grow-machine.onrender.com/fan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pst,
    }),
  });
})

document.getElementById('pump').addEventListener('click', async () => {
  const pst = true;
  await fetch("https://grow-machine.onrender.com/pump", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pst,
    }),
  });
})
