
/* -------------------- PÁGINA: INICIAL | ELEMENTO: ÓRBITA DE ÍCONES | FUNÇÃO: INICIAR ANIMAÇÃO APÓS CARREGAMENTO DA PÁGINA -------------------- */
document.addEventListener("DOMContentLoaded", function () {

  /* -------------------- PÁGINA: INICIAL | ELEMENTO: CONTAINER DA ÓRBITA | FUNÇÃO: CAPTURAR A ÁREA ONDE OS ÍCONES GIRAM -------------------- */
  const orbit = document.getElementById("featuresOrbit");

  /* -------------------- PÁGINA: INICIAL | VALIDAÇÃO | FUNÇÃO: GARANTIR QUE A ANIMAÇÃO SÓ RODE SE A SEÇÃO EXISTIR -------------------- */
  if (orbit) {

    /* -------------------- PÁGINA: INICIAL | ELEMENTO: ITENS DA ÓRBITA | FUNÇÃO: PEGAR TODOS OS ÍCONES QUE IRÃO GIRAR -------------------- */
    const items = orbit.querySelectorAll(".orbit-item");

    /* -------------------- PÁGINA: INICIAL | CONFIGURAÇÃO | FUNÇÃO: DEFINIR O RAIO DO MOVIMENTO CIRCULAR -------------------- */
    const radius = 90;

    /* -------------------- PÁGINA: INICIAL | CONTROLE DE ANIMAÇÃO | FUNÇÃO: CONTROLAR O ÂNGULO DE ROTAÇÃO -------------------- */
    let angle = 0;

    /* -------------------- PÁGINA: INICIAL | FUNÇÃO: ANIMAÇÃO DA ÓRBITA | FUNÇÃO: FAZER OS ÍCONES GIRAREM EM CÍRCULO -------------------- */
    function animate() {

      /* -------------------- ATUALIZAÇÃO DO ÂNGULO | FUNÇÃO: FAZER A ANIMAÇÃO CONTINUAR GIRANDO -------------------- */
      angle += 0.01;

      /* -------------------- LOOP DOS ITENS | FUNÇÃO: CALCULAR POSIÇÃO DE CADA ÍCONE -------------------- */
      items.forEach((item, index) => {

        /* -------------------- CÁLCULO DO ÂNGULO INDIVIDUAL | FUNÇÃO: DISTRIBUIR OS ITENS EM CÍRCULO -------------------- */
        const itemAngle = angle + (index * (Math.PI * 2 / items.length));

        /* -------------------- CÁLCULO DE POSIÇÃO X E Y | FUNÇÃO: DEFINIR POSIÇÃO DO ITEM NA TELA -------------------- */
        const x = Math.cos(itemAngle) * radius;
        const y = Math.sin(itemAngle) * radius;

        /* -------------------- APLICAÇÃO DO MOVIMENTO | FUNÇÃO: MOVER O ELEMENTO NA TELA -------------------- */
        item.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });

      /* -------------------- LOOP DE ANIMAÇÃO | FUNÇÃO: REPETIR A FUNÇÃO INFINITAMENTE -------------------- */
      requestAnimationFrame(animate);
    }

    /* -------------------- INÍCIO DA ANIMAÇÃO -------------------- */
    animate();
  }
});


/* ============================================================ */
/* -------------------- PÁGINA: TICKETS | MODAL NOVO CHAMADO -------------------- */
/* ============================================================ */


/* -------------------- PÁGINA: TICKETS | ELEMENTO: MODAL DE NOVO CHAMADO | FUNÇÃO: ABRIR POPUP AO CLICAR EM "NOVO CHAMADO" -------------------- */
function abrirModal() {
  const modal = document.getElementById("modalChamado");

  if (modal) {
    modal.style.display = "flex";
  }
}


/* -------------------- PÁGINA: TICKETS | ELEMENTO: MODAL DE NOVO CHAMADO | FUNÇÃO: FECHAR POPUP -------------------- */
function fecharModal() {
  const modal = document.getElementById("modalChamado");

  if (modal) {
    modal.style.display = "none";
  }
}


/* ============================================================ */
/* -------------------- PÁGINA: SUPORTE | MODAL DE LOGIN -------------------- */
/* ============================================================ */


/* -------------------- PÁGINA: SUPORTE | ELEMENTO: MODAL DE LOGIN | FUNÇÃO: ABRIR POPUP DE LOGIN AO CLICAR EM "TICKETS" -------------------- */
function abrirModalLogin() {

  const modal = document.getElementById("modalLogin");
  const erro = document.getElementById("loginErro");
  const usuario = document.getElementById("loginUsuario");
  const senha = document.getElementById("loginSenha");

  /* -------------------- ABRIR MODAL -------------------- */
  if (modal) {
    modal.style.display = "flex";
  }

  /* -------------------- LIMPAR ERRO ANTIGO -------------------- */
  if (erro) {
    erro.textContent = "";
  }

  /* -------------------- LIMPAR CAMPOS -------------------- */
  if (usuario) {
    usuario.value = "";
  }

  if (senha) {
    senha.value = "";
  }
}


/* -------------------- PÁGINA: SUPORTE | ELEMENTO: MODAL DE LOGIN | FUNÇÃO: FECHAR POPUP -------------------- */
function fecharModalLogin() {
  const modal = document.getElementById("modalLogin");

  if (modal) {
    modal.style.display = "none";
  }
}


/* -------------------- PÁGINA: SUPORTE | ELEMENTO: FORMULÁRIO DE LOGIN | FUNÇÃO: VALIDAR CAMPOS E REDIRECIONAR -------------------- */
function fazerLogin() {

  const usuario = document.getElementById("loginUsuario");
  const senha = document.getElementById("loginSenha");
  const erro = document.getElementById("loginErro");

  const valorUsuario = usuario.value.trim();
  const valorSenha = senha.value.trim();

  /* -------------------- VALIDAÇÃO | FUNÇÃO: IMPEDIR LOGIN VAZIO -------------------- */
  if (valorUsuario === "" || valorSenha === "") {
    erro.textContent = "Preencha usuário e senha para entrar.";
    return;
  }

  /* -------------------- LOGIN SIMPLES | FUNÇÃO: REDIRECIONAR PARA A PÁGINA DE CHAMADOS -------------------- */
  erro.textContent = "";
  window.location.href = "tickets.html";
}


/* ============================================================ */
/* -------------------- TODAS AS PÁGINAS | FECHAR MODAL AO CLICAR FORA -------------------- */
/* ============================================================ */


/* -------------------- TODAS AS PÁGINAS | ELEMENTO: ÁREA EXTERNA DOS MODAIS | FUNÇÃO: FECHAR POPUP AO CLICAR FORA -------------------- */
window.addEventListener("click", function (event) {

  const modalChamado = document.getElementById("modalChamado");
  const modalLogin = document.getElementById("modalLogin");

  /* -------------------- FECHAR MODAL DE CHAMADO -------------------- */
  if (modalChamado && event.target === modalChamado) {
    modalChamado.style.display = "none";
  }

  /* -------------------- FECHAR MODAL DE LOGIN -------------------- */
  if (modalLogin && event.target === modalLogin) {
    modalLogin.style.display = "none";
  }
});