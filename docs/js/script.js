document.addEventListener("DOMContentLoaded", function () {
  const orbit = document.getElementById("featuresOrbit");

  if (orbit) {
    const items = orbit.querySelectorAll(".orbit-item");
    const radius = 90;
    let angle = 0;

    function animate() {
      angle += 0.01;

      items.forEach((item, index) => {
        const itemAngle = angle + (index * (Math.PI * 2 / items.length));
        const x = Math.cos(itemAngle) * radius;
        const y = Math.sin(itemAngle) * radius;
        item.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  const modal = document.getElementById("modalChamado");

  window.abrirModal = function () {
    if (modal) modal.style.display = "flex";
  };

  window.fecharModal = function () {
    if (modal) modal.style.display = "none";
  };

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});