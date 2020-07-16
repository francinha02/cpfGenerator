import formPassword from "./modules/formPassword";
import CPFMaker from "./modules/CPFMaker";
import "./assets/css/style.css";


(function () {
  const newCPF = new CPFMaker();
  const cpf = document.querySelector(".result");
  cpf.innerHTML = newCPF.newCpf();
})();

formPassword();