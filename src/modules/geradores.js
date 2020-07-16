const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const upperCase = () => String.fromCharCode(rand(65, 91));
const lowerCase = () => String.fromCharCode(rand(97, 123));
const digits = () => String.fromCharCode(rand(48, 58));
const symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
const selectSymbol = () => symbols[rand(0, symbols.length)];

export default function password(qtd, lowercase, uppercase, digit, symbol) {
  const array = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    const e = qtd[i];

    lowercase && array.push(lowerCase());
    uppercase && array.push(upperCase());
    digit && array.push(digits());
    symbol && array.push(selectSymbol());
  }

  return array
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, qtd);
}
