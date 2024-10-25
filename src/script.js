function calculate(operator) {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;
  const resultElement = document.getElementById("result-value");

  resultElement.textContent = "";

  if (!num1 || !num2) {
    resultElement.textContent = "Будь ласка, введіть обидва числа.";
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Будь ласка, введіть дійсні числа.";
    return;
  }

  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  let result;
  switch (operator) {
    case "+":
      result = parsedNum1 + parsedNum2;
      break;
    case "-":
      result = parsedNum1 - parsedNum2;
      break;
    case "*":
      result = parsedNum1 * parsedNum2;
      break;
    case "/":
      if (parsedNum2 === 0) {
        resultElement.textContent = "Ділення на нуль неможливе.";
        return;
      }
      result = parsedNum1 / parsedNum2;
      break;
    default:
      resultElement.textContent = "Невідома операція.";
      return;
  }

  resultElement.textContent = `Результат: ${Math.round(result * 100) / 100}`;
}
