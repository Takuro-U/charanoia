import { mutantPowers } from "../assets/lists";

const isCorrectArg = (arg: number) => {
  const range = 1000;
  if (arg > 0 && (arg * 10) % 10 === 0 && arg <= range) {
    return true;
  } else {
    return false;
  }
};

export const rollDice = (args: {
  dice: number;
  surface: number;
  alpha: number;
}) => {
  let sum = args.alpha;
  if (!isCorrectArg(args.dice) || !isCorrectArg(args.surface)) {
    return "E";
  }
  for (let i = 0; i < args.dice; i++) {
    const rollResult = Math.floor(Math.random() * args.surface) + 1;
    sum += rollResult;
  }
  return sum;
};

export const decideMutantPower = () => {
  const rollResult1 = Math.floor(Math.random() * 4);
  const rollResult2 = Math.floor(Math.random() * 20) + 1;
  if (rollResult1 === 0 || rollResult1 === 1) {
    return mutantPowers[0][rollResult2];
  }
  if (rollResult1 === 2) {
    return mutantPowers[1][rollResult2];
  }
  if (rollResult1 === 3) {
    return mutantPowers[2][rollResult2];
  }
  return "";
};

export const decideBasicStatus = () => {
  const rollResult = Math.floor(Math.random() * 10) + 1;
  if (rollResult > 4) {
    return rollResult;
  } else {
    return 4;
  }
};
