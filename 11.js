let time = {}
    time.h = 60 * 60
    time.d = time.h * 24
    time.w = time.d * 7
    time.m = time.w * 30

userWrite = prompt(`введите вот так:
'h' -- для часов (10h) 
'd' -- для дней (10d)  
'w' -- для недель (10w)
'm' -- для месяцев(10m)`)
 
alert(parseInt(userWrite) * time[userWrite.slice(-1)])