document.addEventListener("DOMContentLoaded", function () {
  const orbit = document.getElementById("featuresOrbit");
  if (!orbit) return;

  const items = orbit.querySelectorAll(".orbit-item");

  const radius = 90; // pode ajustar aqui
  let angle = 0;

  function animate() {
    angle += 0.01;

    items.forEach((item, index) => {
      const itemAngle = angle + (index * (Math.PI * 2 / items.length));

      const x = Math.cos(itemAngle) * radius;
      const y = Math.sin(itemAngle) * radius;

      item.style.transform =
        `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
