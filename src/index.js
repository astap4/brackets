module.exports = function check(str, bracketsConfig) {
  let bracketsPairs = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][0];
    let value = bracketsConfig[i][1];
    bracketsPairs[key] = value;
  }
  console.log(bracketsPairs)
  let stack = [str[0]];
  for (let i = 1; i < str.length; i++) {
    let currentSymbol = str[i];
    let previousSymbol = stack[stack.length - 1]
    if (currentSymbol != bracketsPairs[previousSymbol]) {
      stack.push(currentSymbol);
      console.log(stack) //добавляем в стек, если это открывающаяся скобка
    }
    else {
      stack.pop();
      console.log(stack)}
  }
  return stack.length === 0;
}
