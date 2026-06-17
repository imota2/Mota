document.addEventListener("DOMContentLoaded", () => {
  
  // 1. RELÓGIO DO CARD PRINCIPAL
  const clockElement = document.getElementById("clock");
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    if(clockElement) clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 2. ANIMAÇÃO DAS BARRAS DE RESSONÂNCIA (SKILLS)
  setTimeout(() => {
    const skills = {
      html: "90%",
      css: "85%",
      js: "70%",
      python: "65%",
      flutter: "40%"
    };
    Object.keys(skills).forEach(skill => {
      const el = document.querySelector(`.skill-fill.${skill}`);
      if (el) el.style.width = skills[skill];
    });
  }, 300);

  // 3. LOGICA DO TERMINAL SHINIGAMI (CÓDIGO SECRETO)
  const input = document.getElementById("shinigami-input");
  const btn = document.getElementById("shinigami-btn");
  const output = document.getElementById("terminal-output");

  if(btn && input && output) {
    btn.addEventListener("click", () => {
      const value = input.value.trim();
      if(value === "42-42-564") {
        output.style.color = "lime";
        output.innerHTML = "CONEXÃO ESTABELECIDA. <br>DWMA: 'Olá, Miguel! Belo portfólio... CHOP DE ALMA!'";
      } else {
        output.style.color = "red";
        output.textContent = "PROTOCOLO INVÁLIDO. ACESSO NEGADO.";
      }
    });
  }

  // 4. LÓGICA DA RÁDIO DWMA (MÚLTIPLOS ÁUDIOS)
  const playBtn = document.getElementById("btn-play");
  const staticBtn = document.getElementById("btn-static");
  const display = document.getElementById("radio-display");
  
  // Cria uma lista (Array) com os 3 elementos de áudio
  const audios = [
    document.getElementById("my-audio-1"),
    document.getElementById("my-audio-2"),
    document.getElementById("my-audio-3")
  ];

  let audioAtualIndex = 0; // Controla qual áudio está ativo

  // Função auxiliar para parar todos os áudios de uma vez
  function pararTodosOsAudios() {
    audios.forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  if(playBtn && staticBtn && display && audios[0]) {
    playBtn.addEventListener("click", () => {
      // 1. Para o que estiver tocando antes de avançar
      pararTodosOsAudios();

      // 2. Pega o áudio da vez
      const audioParaTocar = audios[audioAtualIndex];
      
      if (audioParaTocar) {
        audioParaTocar.play().catch(e => console.log("Erro ao tocar áudio:", e));
        
        // Atualiza o visor mostrando qual log está tocando (Log 01, Log 02, Log 03)
        display.textContent = `TRANSMITINDO: LOG_CONFIDENCIAL_0${audioAtualIndex + 1} [PLAYING]`;
      }

      // 3. Atualiza o index para o próximo clique. Se passar de 3, volta pro primeiro (0)
      audioAtualIndex = (audioAtualIndex + 1) % audios.length;
    });

    staticBtn.addEventListener("click", () => {
      // Se clicar em estática, corta a voz na hora
      pararTodosOsAudios();
      
      display.textContent = "KRRRZZZ... SCHHH... INTERFERÊNCIA DETECTADA... KHZZZ";
      setTimeout(() => {
        display.textContent = "STATUS: FREQUÊNCIA SINTONIZADA // PRONTOS PARA TRANSMISSÃO";
      }, 1500);
    });
 }
});

/* ==========================================================================
     5. CONTROLE DO MENU RETRÁTIL
     ========================================================================== */
  const menu = document.getElementById("side-menu");
  const openBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const menuItems = document.querySelectorAll(".menu-item");
  const overlay = document.querySelector('.menu-overlay'); // Adicione uma div com essa classe no HTML

  if (menu && openBtn && closeBtn) {
    // Abre o menu
    openBtn.addEventListener("click", () => {
      menu.classList.add("open");
    });

    // Fecha o menu no botão X
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (para navegar)
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }

  function enviarWhatsApp() {
    // Captura os valores
    const meister = document.getElementById('meister-id').value;
    const email = document.getElementById('email-chan').value;
    const msg = document.getElementById('mission-msg').value;
    
    // Substitua pelo seu número (55 + DDD + Numero)
    const numero = "5513991956321"; 
    
    // Monta o texto da mensagem
    const mensagem = `*NOVA ALMA RECOLHIDA*%0A%0A*Meister:* ${meister}%0A*Contato:* ${email}%0A*Proposta:* ${msg}`;
    
    // Abre o WhatsApp
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
  }

  // --- SISTEMA DE LOGS AUTOMÁTICO VIA GITHUB ISSUES ---
document.addEventListener("DOMContentLoaded", function() {
    const logsContainer = document.getElementById('logs-container');
    
    // Só roda se o container existir na página (para não dar erro em outras páginas)
    if (logsContainer) {
        // Substitua pelo seu usuário e nome do repo
        const repo = "imota2/Mota"; 

        fetch(`https://api.github.com/repos/${repo}/issues?state=open`)
            .then(res => res.json())
            .then(data => {
                logsContainer.innerHTML = ""; // Limpa qualquer placeholder

                data.forEach(issue => {
                    // Formata a data para dd.mm.aaaa
                    const dataLog = issue.created_at.split('T')[0].split('-').reverse().join('.');
                    
                    // Cria o HTML do log mantendo suas classes originais
                    logsContainer.innerHTML += `
                        <div class="diary-log">
                            <span class="log-date">[TRANSMISSÃO_LOG: ${dataLog}]</span>
                            <p>${issue.body}</p>
                        </div>
                    `;
                });
            })
            .catch(err => {
                console.error("Erro ao carregar logs:", err);
                logsContainer.innerHTML = "<p>Falha na transmissão da rede.</p>";
            });
    }
});
