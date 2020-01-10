
let number

while (number == NaN || number == undefined) {
    number = Number(prompt('введите число'))
}

alert(`квадрат числа ${number} это ${number * number}`)