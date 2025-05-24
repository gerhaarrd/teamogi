const portas = document.querySelectorAll('.porta');
const corredor = document.getElementById('corredor');
const salas = document.querySelectorAll('.sala');
const voltarBtns = document.querySelectorAll('.voltar');

portas.forEach(porta => {
  porta.addEventListener('click', () => {
    const salaId = porta.getAttribute('data-sala');
    corredor.classList.add('hidden');
    salas.forEach(sala => {
      if (sala.id === salaId) sala.classList.remove('hidden');
      else sala.classList.add('hidden');
    });
  });
});

voltarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    salas.forEach(sala => sala.classList.add('hidden'));
    corredor.classList.remove('hidden');
  });
});

// Função para criar os pixels do portal
function criarPortalPixels() {
  const portalGrids = document.querySelectorAll('.portal-grid');
  portalGrids.forEach(grid => {
    // Criar 32x32 pixels
    for (let i = 0; i < 32 * 32; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      grid.appendChild(pixel);
    }
  });
}

// Interatividade dos portais do Multiverso
document.querySelectorAll('.portal').forEach(portal => {
  portal.addEventListener('click', () => {
    const portalType = portal.getAttribute('data-portal');
    
    if (portalType === 'infancia') {
      const modal = document.getElementById('modalInfancia');
      const modalImage = modal.querySelector('.modal-image');
      modalImage.src = 'infancia.png';
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    } else if (portalType === 'astronautas') {
      const modal = document.getElementById('modalAstronautas');
      const modalImage = modal.querySelector('.modal-image');
      modalImage.src = 'astro.png';
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    } else if (portalType === 'praia') {
      const modal = document.getElementById('modalPraia');
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    } else if (portalType === 'futuro') {
      const modal = document.getElementById('modalFuturo');
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    }
  });
});

// Fechar qualquer modal ao clicar no botão X
document.querySelectorAll('.close').forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    const modal = closeButton.closest('.modal');
    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  });
});

// Fechar qualquer modal ao clicar fora dele
window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  });
});

// Fechar o modal ao clicar no botão X ou fora do modal
document.querySelector('.close').addEventListener('click', () => {
  const modal = document.getElementById('modalInfancia');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('modalInfancia');
  if (modal && event.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
});

// Envelope interaction
const envelope = document.querySelector('.envelope');
if (envelope) {
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
  });
}
