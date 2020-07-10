import CPFValidator from "./CPFValidator";

export default class CPFMaker {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  format(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    )
  }

  newCpf() {
    const cleanCpf = this.rand();
    const digit1 = CPFValidator.generatesDigit(cleanCpf);
    const digit2 = CPFValidator.generatesDigit(cleanCpf + digit1);
    const cpf = cleanCpf + digit1 + digit2;
    return this.format(cpf)
  }
}
