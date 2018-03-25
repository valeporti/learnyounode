//console.log(process.argv);
let args = process.argv;
let sum = 0;
for (let i = 0; i < args.length - 2; i ++) 
{
    sum += Number(args[2 + i]); 
}
console.log(sum);