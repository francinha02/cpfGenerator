export default class CPFValidator {
  constructor(cpfSended) {
    Object.defineProperty(this, "cleanCPF", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfSent.replace(/\D+/g, ""),
    });
  }

  isSequency() {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
  }

  geraNovoCpf() {
    const cpfNoDigits = this.cleanCPF.slice(0, -2);
    const digit1 = ValidatesCPF.generatesDigit(cpfNoDigits);
    const digit2 = ValidatesCPF.generatesDigit(cpfNoDigits + digit1);
    this.novoCPF = cpfNoDigits + digit1 + digit2;
  }

  static generatesDigit(cpfNoDigits) {
    let total = 0;
    let reverse = cpfNoDigits.length + 1;

    for (let stringNumeric of cpfNoDigits) {
      total += reverse * Number(stringNumeric);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }

  valid() {
    if (!this.cleanCPF) return false;
    if (typeof this.cleanCPF !== "string") return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.isSequency()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cleanCPF;
  }
}
