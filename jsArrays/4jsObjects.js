let dog = {name:'Woody', type:'dog'}
let cat = {name:'Bob', type:'cat'}
console.log(dog)

let petNames = ["Woody","Bob"]
console.log(petNames)

let pets = [dog, cat]
console.log(pets)

pets = [{name:'Woody', type:'dog'},cat]
console.log(pets)

pets.push({'name':'Roxy', 'type':'dog'})
console.log(pets[2])

cat.age = 2
dog["age"] = 14
pets[2].age = 14
pets[0]['age'] = 6
console.log(pets)
