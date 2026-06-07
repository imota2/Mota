const analisarBtn = document.getElementById("analisar");
const discordBtn = document.getElementById("discordBtn");
const whatsBtn = document.getElementById("whatsBtn");

const successScreen = document.getElementById("dwmaSuccess");
const successId = document.getElementById("successId");
const closeSuccess = document.getElementById("closeSuccess");

let compatibilidadeFinal = 0;
let idFinal = "";
let statusFinal = "";

/* ANÁLISE */
analisarBtn.addEventListener("click", () => {

  compatibilidadeFinal = Math.floor(Math.random() * 41) + 60;
  idFinal = "DW-" + Math.floor(Math.random() * 9000 + 1000);

  if (compatibilidadeFinal >= 90) statusFinal = "CLASSE ELITE";
  else if (compatibilidadeFinal >= 80) statusFinal = "APROVADO";
  else statusFinal = "EM OBSERVAÇÃO";

  document.getElementById("compatibilidade").innerText =
    `COMPATIBILIDADE DWMA: ${compatibilidadeFinal}%`;

  document.getElementById("idUnidade").innerText =
    `ID DA UNIDADE: ${idFinal}`;

  document.getElementById("statusFinal").innerText =
    `STATUS: ${statusFinal}`;

  document.getElementById("resultado").classList.remove("hidden");
});

/* FECHAR SUCESSO */
closeSuccess.addEventListener("click", () => {
  successScreen.classList.remove("active");
});

/* DISCORD */
discordBtn.addEventListener("click", async () => {

  const nome = document.querySelector('[name="Nome"]').value;
  const codinome = document.querySelector('[name="Codinome"]').value;
  const idade = document.querySelector('[name="Idade"]').value;
  const cidade = document.querySelector('[name="Cidade"]').value;
  const tipoAlma = document.querySelector('[name="Tipo de Alma"]').value;
  const habilidades = document.querySelector('[name="Habilidades"]').value;
  const objetivo = document.querySelector('[name="Objetivo"]').value;

  const mensagem = {
    content:
`╔═══════════════════════════╗
               DWMA SYSTEM • RECRUIT FILE
╚═══════════════════════════╝

📁 STATUS: NEW UNIT DETECTED

--- IDENTITY ---
• Nome: ${nome}
• Codinome: ${codinome}
• Idade: ${idade}
• Cidade: ${cidade}

--- SOUL DATA ---
• Tipo de Alma: ${tipoAlma}
• Habilidades: ${habilidades}

--- OBJECTIVE ---
${objetivo}

--- SYSTEM OUTPUT ---
• Compatibilidade: ${compatibilidadeFinal}%
• ID: ${idFinal}
• Status: ${statusFinal}`
  };

  await fetch("https://dwma-back.onrender.com/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(mensagem)
  });

  successId.innerText = `ID: ${idFinal}`;
  successScreen.classList.add("active");
});

/* WHATSAPP */
whatsBtn.addEventListener("click", () => {

  const nome = document.querySelector('[name="Nome"]').value;
  const codinome = document.querySelector('[name="Codinome"]').value;
  const idade = document.querySelector('[name="Idade"]').value;
  const cidade = document.querySelector('[name="Cidade"]').value;
  const tipoAlma = document.querySelector('[name="Tipo de Alma"]').value;
  const habilidades = document.querySelector('[name="Habilidades"]').value;
  const objetivo = document.querySelector('[name="Objetivo"]').value;

  const texto =
`DWMA RECRUTA

ID: ${idFinal}
Nome: ${nome}
Codinome: ${codinome}
Idade: ${idade}
Cidade: ${cidade}
Alma: ${tipoAlma}
Habilidades: ${habilidades}
Objetivo: ${objetivo}
Compatibilidade: ${compatibilidadeFinal}%`;

  window.open(
    `https://wa.me/5513991956321?text=${encodeURIComponent(texto)}`,
    "_blank"
  );
});