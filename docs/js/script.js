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
});

function abrirModal() {
  const modal = document.getElementById("modalChamado");
  if (modal) {
    modal.style.display = "flex";
  }
}

function fecharModal() {
  const modal = document.getElementById("modalChamado");
  if (modal) {
    modal.style.display = "none";
  }
}

function abrirModalLogin() {
  const modal = document.getElementById("modalLogin");
  const erro = document.getElementById("loginErro");
  const usuario = document.getElementById("loginUsuario");
  const senha = document.getElementById("loginSenha");

  if (modal) {
    modal.style.display = "flex";
  }

  if (erro) {
    erro.textContent = "";
  }

  if (usuario) {
    usuario.value = "";
  }

  if (senha) {
    senha.value = "";
  }
}

function fecharModalLogin() {
  const modal = document.getElementById("modalLogin");
  if (modal) {
    modal.style.display = "none";
  }
}

function fazerLogin() {
  const usuario = document.getElementById("loginUsuario");
  const senha = document.getElementById("loginSenha");
  const erro = document.getElementById("loginErro");

  const valorUsuario = usuario.value.trim();
  const valorSenha = senha.value.trim();

  if (valorUsuario === "" || valorSenha === "") {
    erro.textContent = "Preencha usuário e senha para entrar.";
    return;
  }

  erro.textContent = "";
  window.location.href = "tickets.html";
}

window.addEventListener("click", function (event) {
  const modalChamado = document.getElementById("modalChamado");
  const modalLogin = document.getElementById("modalLogin");

  if (modalChamado && event.target === modalChamado) {
    modalChamado.style.display = "none";
  }

  if (modalLogin && event.target === modalLogin) {
    modalLogin.style.display = "none";
  }
});