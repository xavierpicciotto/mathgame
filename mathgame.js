const test = (min,max) => Math.floor(Math.random() * (max - min) + min + 1)

let somme = 0
let maxPoints = 11916

const run = () => {for(let i=0;i<1000;i++){somme=somme+test(1, 20)}}

const game =()=>{for(let i=0;i<1000; i++){
run()
if(somme > maxPoints){maxPoints = somme}
somme = 0
}}

for(let y=0;y<5000;y++){
game()
console.log(y)
}
console.log('partie terminer '+ `max points  ${maxPoints}`)