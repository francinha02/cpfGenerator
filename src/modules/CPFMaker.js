import CPFValidator from "./CPFValidator";

export default class CPFMaker {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  newCpf() {
    const cleanCpf = this.rand();
    const digit1 = CPFValidator.generatesDigit(cleanCpf);
    const digit2 = CPFValidator.generatesDigit(cleanCpf + digit1);
    const cpf = cleanCpf + digit1 + digit2;
    return cpf
  }
}
