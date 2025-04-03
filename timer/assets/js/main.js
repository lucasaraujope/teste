function relogio() {
  function getMiliseconds(seconds) {
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC"
    });
  }

  const time = document.querySelector(".timer")

  let segundos = 0
  let timer

  function iniciaSegundos() {
    timer = setInterval(function () {
      segundos++, 
      time.innerHTML = getMiliseconds(segundos)
    }, 1000);
  }

  document.addEventListener("click", function (event) {
    const el = event.target;

    if (el.classList.contains("zerar")) {
      clearInterval(timer)
      time.innerHTML = "00:00:00"
      segundos = 0
      time.classList.remove("red-color")
      time.classList.add("black-color")
    }

    if (el.classList.contains("start")) {
      clearInterval(timer)
      iniciaSegundos()
      time.classList.remove("red-color")
      time.classList.add("black-color")
    }

    if (el.classList.contains("pause")) {
      clearInterval(timer)
      time.classList.add("red-color")
      time.classList.remove("black-color")
    }
  });
}

relogio()