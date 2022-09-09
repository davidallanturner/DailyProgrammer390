//do a count of 1's in a string
// /r/dailyprogrammer #390 - Not actually difficult in JS

function r(int){
 let out = []
 for(let i=1;i<=int;i++){
  out += i
 }
 return out
}

r(10)

 function count(num){
  let counts = 0
  for(let i=0; i<num.length;i++){
   if(num[i] == 1) {
    counts++
   }
  }
  console.log(counts)
 }

 count(r(11))