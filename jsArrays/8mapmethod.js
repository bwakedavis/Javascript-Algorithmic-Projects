let names = [ 'Alex', 'Chewie', 'Ray', 'harriet', 'max', 'stacey' ]

let nameL = names.map((item,index,array)=>{
    return item.length
})
console.log(nameL)