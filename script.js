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

  const form = document.querySelector("form");
  form?.addEventListener("submit", () => {
    const url = form.querySelector('input[name="_url"]');
    if (url) url.value = window.location.href;
  });
});
