window.addEventListener("load", () => {
    setTimeout(() => {
      console.log("Сообщение с задержкой!");
      document.getElementById("output").textContent = "Таймер сработал!";
    }, 3000);
  });


