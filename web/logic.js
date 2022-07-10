function crearCards() {
  setTimeout(() => {
    const info = [

    {
      category: "Entretenimiento",
      title: "‘Thor: Love and Thunder’ hace de los cortos de Darryl canon en el MCU",
    },
    {
      category: "CRIPTOMONEDAS",
      title: "Aumentan las estafas con criptomonedas en YouTube",
    },
    {
      category: "APSS & SOFTWARE",
      title: "Google propone dividir su negocio publicitario ante señalamientos anticompetitivos",
    },
  ];

    const containerRef = document.getElementsByClassName("container")[0];
    // usamos backticks ``
    const containerHtml = info.map(
      (art) => `<div class="card">
        <div class="card-left"></div>
        <div class="card-right">
            <h2>${art.category}</h2>
            <p>${art.title}</p>
        </div>
    </div>`
    );
    containerRef.innerHTML = containerHtml;
  }, 800);
}

crearCards();
