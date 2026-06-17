// function kcuhDerBaadChalunga(callback){
//     setTimeout(
//         ()=>{
//             console.log(callback());
//         },
//         Math.floor(Math.random() * 7 )*1000
//     );
// } 
// kcuhDerBaadChalunga(function(){
//     console.log("I will run after some time");
// });


function profileLekeaao(username , cb){
    setTimeout(() => {
        console.log(`profile feched of ${username}`);
    }, 2000);

}
profileLekeaao("sachin", function(){
});