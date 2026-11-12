// Menu Responsivo Mobile
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  if (nav) {
    nav.classList.toggle('open');
  }
}

function closeMenu() {
  const nav = document.getElementById('main-nav');
  if (nav) {
    nav.classList.remove('open');
  }
}

// Simulador Interativo de Eletroforese em Gel (DNA)
function verificarSuspeito(opcao) {
  const feedback = document.getElementById('sim-feedback');
  if (!feedback) return;

  if (opcao === 'B') {
    feedback.style.color = '#4ade80';
    feedback.textContent = '✔ Compatibilidade Genética Confirmada! As bandas do Suspeito B coincidem 100% com a amostra coletada na cena.';
  } else {
    feedback.style.color = '#ef4444';
    feedback.textContent = '✖ Perfil Excluído! O padrão de bandas do Suspeito ' + opcao + ' não corresponde ao DNA encontrado na cena.';
  }
}

// Upload de Fotos Reais do Dia da Feira de Profissões
function adicionarFoto(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const galeria = document.getElementById('galeria-stand');
    if (!galeria) return;

    const figure = document.createElement('figure');
    figure.className = 'photo-card';
    figure.innerHTML = `
      <img src="${e.target.result}" alt="Registro fotográfico real do stand de Biologia Forense na Feira de Profissões" loading="lazy">
      <figcaption><strong>Registro Oficial:</strong> Foto adicionada durante a apresentação do stand.</figcaption>
    `;
    galeria.prepend(figure);
  };
  reader.readAsDataURL(file);
}
