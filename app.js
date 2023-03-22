console.log("Hello World!\n==========\n");


for(let i = 0; i < 100; i++){
    if (i % 2 == 0){
        continue;
    } else{
        console.log(i);
    }
}



for(let x = 0; x < 100; x++){
    console.log(x);
    if( x % 3 == 0 && x % 5 == 0){
        console.log("Fizzbuzz");
    }else {
        if (x % 3 == 0){
            console.log("Fizz");
        } 
            if (x % 5 == 0){
                console.log("Buzz");
            }
        }
    }
   
let d = 1;

while(d <= 100)
{
let output = "";

if(d % 3 == 0){
    output += "FIZZ";
}
if(d % 5 == 0){
    output += "BUZZ";
}
console.log(`${d} ${output}`);
d++;
}

let e = 1;
do{
    if(e % 3 == 0){
        console.log(e);
    }
    e++;
}while (e <100);


let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 
let foundValue = false;

for (let r = 1; r <= n; r++){
    if (r = value){
        foundValue = true;
        break;
    }
   }
   if(foundValue){
    console.log(`Found ${value}`);
   }else{
    console.log(`Did not find ${value} withing 1-${n}`);
   }

   let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
   let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
   let m = Math.round(Math.random() * (1000 - 1) + 1);
   let start = Math.round(Math.random() * (10 - 1) + 1);

   for(let i = start; i <= m; i++)
    {
        let output = "";
    
        if (i % fizzDivisor == 0){
            output += "FIZZ"
        }

        if (i % buzzDivisor == 0){
            output += " BUZZ"
        }
        console.log(`${i} ${output}`);
    }
   console.log(fizzDivisor , buzzDivisor);