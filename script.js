function updateClock(){

  const now = new Date();

  document.getElementById("clock").innerText =
    now.toLocaleTimeString("pt-BR");

}

setInterval(updateClock, 1000);
updateClock();