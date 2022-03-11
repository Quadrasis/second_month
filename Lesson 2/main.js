for(let i =0;i<6;i++){
    for(let j=0;j<i;j++){
        console.log('*');
    }
 console.log(`треугольник`)
}
let num = 1;
for( ; num <= 100; num++ ){
    if( num%3 === 0 ){
         console.log(num, " = Fizz ");
    } else {
        if (num % 5 === 0) {
            console.log(num, " = Buzz ");
        } else {
            if (num % 5 === 0 && num % 3 === 0) {
                console.log(num, " = FizzBuzz ");
            } else {
                console.log(num, "");
            }

        }
    }
}
