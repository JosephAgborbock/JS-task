//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
for(let n = 1; n < 100; n++) {
    let output = "";
    if(n % 3 == 0) output += "FIZZ"
    if(n % 5 == 0) output += "BUZZ"
    console.log(output || n);
}