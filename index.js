const fs = require('fs');

const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8'); // enter the path of the file to print the content of it

console.log(textIn);
//blocking , Synchronus way
//read and  write file in node.js
const textOut = ' This is what we know about the avocado: ' + textIn + '\nCreated on ' + Date.now();
fs.writeFileSync('./final/txt/output.txt', textOut);
console.log('File written!');

//Synchronus- processes aare executed one by one if first process is taking then the rest have to wait for the completion of the first one.
//Also, synchronus is single thread // also blocking way

//Asynchronus- time consuming tasks are executed in background in the mean time rest process can be executed in synchronus 
//it is called non blocking method and it uses callback methods (we use more it in node js) //but it doesnt make them asynchornus code


//Non blocking, synchronus way
fs.readFile('./final/txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});