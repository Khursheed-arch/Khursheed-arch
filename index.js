
for (let i = 0; i < 10; i++) {
	console.log(i);
}
let i = 0;
while (i<=10) {
	console.log(i);
	i++;
}
//===========================//
//table of 12 using for loop;//
//===========================//
for(let num = 1; num <= 10; num++){
  let tableOf = 12;
  console.log( ` ${tableOf} * ${num} = ${tableOf * num} ` );
}
//============//
//table of 13 //
//============//
for (let num = 0; num <= 10; num++) {
	let tableOf = 13;
	console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}
//============//
// While Loop //
//============//
let table = 14;
let a = 1;
while (a <= 10) {
	console.log(`${table} * ${a} = ${table * a}`)
	a++;
}
//modulus operator using if/else statement
let x = 58;
if (x%2==0) {
	console.log("even number")
} else {
	console.log("odd number")
}