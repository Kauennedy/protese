/* ==========================================================================
   Helinho Prótese Dentária
   1. Configuração (edite aqui)
   2. Dados de contato e links do WhatsApp
   3. Menu para celular e tablet
   4. Ano do rodapé
   ========================================================================== */

/* 1. Configuração ---------------------------------------------------------
   Preencha os dados do laboratório. Os campos deixados vazios continuam
   mostrando o texto entre colchetes da página.

   whatsappNumber: somente números, com código do país e DDD.
                   Exemplo: "5581999999999"
   whatsappDisplay: como o número aparece na tela.
                   Exemplo: "(81) 99999-9999"
-------------------------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: "558491329199",
  whatsappDisplay: "(84) 9132-9199",
  whatsappMessage: "Olá! Gostaria de consultar o preço de uma prótese dentária.",
  address: "Rua Ademar Liberato, nº 204, depois do cemitério velho, Centro, São Miguel",
  hours: "",
};

(function () {
  "use strict";

  /* 2. Dados de contato e links do WhatsApp ------------------------------ */
  function applyConfig() {
    // Textos de contato
    document.querySelectorAll("[data-config]").forEach(function (el) {
      var value = CONFIG[el.dataset.config];
      if (value) el.textContent = value;
    });

    // Botões de WhatsApp
    var number = String(CONFIG.whatsappNumber || "").replace(/\D/g, "");
    if (!number) return;

    var url = "https://wa.me/" + number + "?text=" + encodeURIComponent(CONFIG.whatsappMessage);
    document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  /* 3. Menu para celular e tablet ---------------------------------------- */
  function setupMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Fecha ao escolher um link
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });

    // Fecha com Esc
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    // Fecha ao voltar para a tela larga
    window.matchMedia("(min-width: 821px)").addEventListener("change", function (event) {
      if (event.matches) setOpen(false);
    });
  }

  /* 4. Ano do rodapé ----------------------------------------------------- */
  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  applyConfig();
  setupMenu();
  setYear();
})();
