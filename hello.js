//setting the variable of kelvin to a const as this variable needs to remain constant
const kelvin = 0;
//setting celsius to constant
const celsius = kelvin - 273;
//calculating value of fahrenheit through celsius
const fahrenheit = celsius * (9/5) + 32;
console.log(Math.floor(fahrenheit));//rounding to close whole number
//Interpolation of string and variable value
console.log(`The temperature in ${fahrenheit} degrees fahrenheit`);