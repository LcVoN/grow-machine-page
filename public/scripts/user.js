const temperatureOutput = document.getElementById("temperatureOutput");
const humidityOutput = document.getElementById("humidityOutput");
const glowOutput = document.getElementById("glowOutput");

async function getData() {
  fetch("https://grow-machine.onrender.com/data")
  .then((res) => {
    if (!res.ok) {
      throw new Error("La petición no fue ok");
    }
    return res.json();
  })
  .then((data) => {
    const { temperature, glow, humidity } = data;
    temperatureOutput.innerText = temperature + "°C";
    humidityOutput.innerText = humidity + "%";
    glowOutput.innerText = glow;
  })
  .catch((error) => {
    console.error("Hubo un problema con la petición GET: ", error);
  });
}

getData();

setInterval(getData, 3000);
