import Password from "./geradores";

const password = document.querySelector(".password");
const qtdChar = document.querySelector(".qtd-char");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const digits = document.querySelector(".digits");
const symbols = document.querySelector(".symbol");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
  gerarSenha.addEventListener("click", () => {
    password.innerHTML = create();
  });
};

function create() {
  const pass = Password(
    qtdChar.value,
    lowercase.checked,
    uppercase.checked,
    digits.checked,
    symbols.checked
  );

  return pass || 'Nada Selecionado';
}
