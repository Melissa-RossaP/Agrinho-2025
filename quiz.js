


document.addEventListener("DOMContentLoaded", function () {
  const gabarito = {
    q1: 'b',
    q2: 'c',
    q3: 'b',
    q4: 'c',
    q5: 'c',
    q6: 'c',
    q7: 'c',
    q8: 'b'
  };

  let respostasVisiveis = false; // flag para controlar se respostas estão visíveis

  function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      const colors = ['#FFC107', '#FF5722', '#4CAF50', '#03A9F4', '#E91E63'];
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * -20}vh`;
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
      confetti.style.animationDelay = `${Math.random()}s`;

      confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.remove(), 5000);
  }

  document.getElementById("corrigirBtn").addEventListener("click", function () {
    let total = 8;
    let acertos = 0;

    for (let i = 1; i <= total; i++) {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if (resposta && resposta.value === gabarito[`q${i}`]) {
        acertos++;
      }
    }

    const porcentagem = Math.round((acertos / total) * 100);
    document.getElementById("resultadoTexto").textContent = `Acertos: ${porcentagem}%`;

    createConfetti();

    this.textContent = "Corrigir";
    document.getElementById("verRespostasBtn").style.display = "inline-block";

    // Sempre que corrigir, esconder as respostas para resetar o estado
    respostasVisiveis = false;
    document.getElementById("respostas").style.display = "none";
    document.getElementById("respostas").innerHTML = "";
    document.getElementById("verRespostasBtn").textContent = "Ver respostas";
  });

  document.getElementById("verRespostasBtn").addEventListener("click", function () {
    const respostasDiv = document.getElementById("respostas");

    if (!respostasVisiveis) {
      // Mostrar respostas
      const respostas = [
        "1) Produzir alimentos (b)",
        "2) Substâncias usadas para combater pragas (c)",
        "3) Revolução Verde (b)",
        "4) Produção que respeita o meio ambiente (c)",
        "5) Agricultura familiar (c)",
        "6) Uso de máquinas e tecnologia (c)",
        "7) Aplicando práticas sustentáveis (c)",
        "8) Rotação de culturas (b)"
      ];

      respostasDiv.innerHTML = ""; // limpa
      respostas.forEach((resposta) => {
        const box = document.createElement("div");
        box.className = "resposta-box";
        box.textContent = resposta;
        respostasDiv.appendChild(box);
      });

      respostasDiv.style.display = "block";
      this.textContent = "Esconder respostas";
      respostasVisiveis = true;

    } else {
      // Esconder respostas
      respostasDiv.style.display = "none";
      respostasDiv.innerHTML = "";
      this.textContent = "Ver respostas";
      respostasVisiveis = false;
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const btnTopo = document.getElementById('btnTopo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-acessibilidade');
  const menu = document.getElementById('menu-acessibilidade');
  const header = document.querySelector('header');

  if (btn && menu && header) {
    btn.addEventListener('click', () => {
      const ativo = menu.classList.toggle('ativo');
      if (ativo) {
        header.classList.add('menu-aberto');
      } else {
        header.classList.remove('menu-aberto');
      }
    });
  }

  document.getElementById('linkContato')?.addEventListener('click', function(event) {
    event.preventDefault();
    const contato = document.getElementById('contato');
    if (contato) {
      contato.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  setTimeout(() => {
    document.getElementById('splash-screen')?.classList.add('fade-out');
    document.getElementById('main-content')?.classList.add('visible');
  }, 4000);
});


  function toggleMenu() {
  const menu = document.getElementById('menuAcessibilidade');
  menu.classList.toggle('ativo');
}


let tamanhoFonteAtual = 1;

function aumentarFonte() {
  if (tamanhoFonteAtual < 2) {
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = tamanhoFonteAtual + 'em';
  }
}

function diminuirFonte() {
  if (tamanhoFonteAtual > 0.5) {
    tamanhoFonteAtual -= 0.1;
    document.body.style.fontSize = tamanhoFonteAtual + 'em';
  }
}

function contraste() {
  document.body.classList.toggle('contraste-ativo');
}

function lerTexto() {
  speechSynthesis.cancel();
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}

