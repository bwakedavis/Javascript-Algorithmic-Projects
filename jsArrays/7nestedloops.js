let two = [[1,2,3,4,5,6,7],
[8,10,5,7,3,22,6,42],
[123,54,12,11,9,15]]

let bigHero = {
    characters:[
        {name:"Hiro", voice:"Ryan potter"},
        {name:"Baymax", voice:"Scot Adsit"},
        {name:"Go Go", voice:"Jamie Chung"},
        {name:"Fred", voice:"T.J Miller"}
    ]
}

//nested for loop
let rows = two.length
for(let i=0;i<rows;i++){
    let items = two[i].length
    console.log(i, items)
    for(let n=0;n<items;n++){
        console.log(two[i][n])
    }
}

let chars = bigHero['characters']
for(let i = 0;i<chars.length;i++){
    console.log(chars[i])
    console.log(chars[i].name)
    console.log(chars[i]['voice'])
    for(let prop in chars[i]){
        console.log(prop, chars[i][prop])
    }
}