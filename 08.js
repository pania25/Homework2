let str = 'Привет, Мир!'
let summ = 0

for (char = 0; char < str.length; char++ ){
    summ += str.charCodeAt(char)
}

alert(summ)