let monsters = {'Canada':'Sasquatch', 'Nepal':'Yeti', 'Scotland':'Loch'}
console.log(monsters)

for(let prop in monsters){
    console.log(prop)
    console.log(monsters[prop])
    console.log('In', prop, "we have ", monsters[prop])
}