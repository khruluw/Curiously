var a=0;
var b=1;
var c=a+b;
console.log(a);
console.log(b);
while(c<100){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}