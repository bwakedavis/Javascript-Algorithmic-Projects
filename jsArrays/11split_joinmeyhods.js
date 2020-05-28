let sentence = "Hello my name is Davis Bwake"

 sentence =  sentence.trim()
let words = sentence.split("").sort()
console.log(words)
// let chars = sentence.split('name')
// console.log(chars)

let hyphernated = words.join("-")
console.log(hyphernated)