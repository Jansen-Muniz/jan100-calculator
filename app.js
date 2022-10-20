const input = document.querySelector('.display')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')

const insertValues = number => {
  input.value = input.value + number
}

const calculate = () => {
  input.value = eval(input.value)
}

const squareRoot = () => {
  input.value = Math.sqrt(input.value)
}

const clearInput = () => {
  input.value = ''
}
