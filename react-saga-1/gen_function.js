function* generate(i){
    yield i
    yield i-1
    yield i-2
}
const gen = generate(10)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//output
//10
//9
//8