let number = null
let summ = 0

while (isNaN(number) || number == null) {
    number = Number(prompt('введите целое число'))
}

for (let addend = 0; 
    number > 0 ? addend <= number : addend >= number;
    number > 0 ? addend++ : addend--) {
        summ += addend % 2 != 0 ? addend : 0
    }

alert(summ)