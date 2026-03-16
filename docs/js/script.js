document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnSuporte');
  btn.addEventListener('click', () => {
    window.location.href = 'suporte.html'; // ajuste o caminho se estiver em subpasta
  });
});
``