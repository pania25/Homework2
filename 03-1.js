let hour

while (hour == NaN || hour == undefined) {
    hour = Number(prompt('введите кол-во часов'))
}

alert(`В ${hour} часах ${hour*3600} секунд`)