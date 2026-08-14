document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const cpf = document.getElementById("cpf");
  const phone = document.getElementById("telefone");

  cpf?.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
         .replace(/(\d{3})(\d)/, "$1.$2")
         .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = v;
  });

  phone?.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{1,4}).*/, "($1) $2-$3");
    } else {
      v = v.replace(/^(\d{2})(\d{4})(\d{1,4}).*/, "($1) $2-$3");
    }
    e.target.value = v;
  });

  const form = document.getElementById("cadastro-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = data.get("nome");
    const sobrenome = data.get("sobrenome");
    const email = data.get("email");
    const cpf = data.get("cpf");
    const telefone = data.get("telefone");

    const message =
      `Olá Gabriel! Quero fazer meu cadastro no site Musuris.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Sobrenome:* ${sobrenome}%0A` +
      `*E-mail:* ${email}%0A` +
      `*CPF:* ${cpf}%0A` +
      `*Telefone:* ${telefone}%0A%0A` +
      `Confirmo que li e aceito os Termos de Uso.`;

    window.open(`https://wa.me/5521969742534?text=${message}`, "_blank", "noopener");
  });
});
