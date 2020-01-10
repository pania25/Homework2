let str = 'abcde'

console.log(`буква '${str[0]}', буква '${str[1]}', буква '${str[4]}'`)

for (let counter = 0; counter < str.length; counter++) {
    console.log(`буква '${str[counter]}' ${'abe'.indexOf(str[counter]) != -1 ? 'Я эту букву знаю' : ''}`)
}