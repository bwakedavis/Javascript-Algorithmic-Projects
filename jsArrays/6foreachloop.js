let names = [ 'Alex', 'Chewie', 'Ray', 'harriet', 'max', 'stacey' ]

names.forEach((item,index,array) =>{
    if(item === 'Ray'){
        item = item.toUpperCase()
    }else{
        item = item.toLowerCase()
    }
    console.log(index,item)
})