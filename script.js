let outputScreen = document.querySelector("#calc_input");
const form = document.querySelector("form");
const display = (num) => {
  outputScreen.value += num;
};
const calcClear = () => {
  outputScreen.value = "";
};
const del = () => {
  outputScreen.value = outputScreen.value.slice(0, -1);
};

const calculate = () => {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch {
    outputScreen.value = "Error!";
  }
};
