// setInterval(function(){
//     console.log("Hello World");

// },2000);



// setInterval(function(){
//     console.log("Hello World");

// },2000);

let count = 10;

let intr = setInterval(function(){
    if(count >= 0){
        console.log(count);
         count--;
        
    }else clearInterval(intr);

},1000);

