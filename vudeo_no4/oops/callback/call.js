function kcuhDerBaadChalunga(callback){
    setTimeout(
        ()=>{
            console.log(callback());
        },
        Math.floor(Math.random() * 7 )*1000
    );
} 
kcuhDerBaadChalunga(function(){
    console.log("I will run after some time");
});
