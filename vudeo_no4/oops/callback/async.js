let prb = new Promise(function (res , re ){
    setTimeout(() => {
        let rn = math.floor(Math.random() * 10);
        if (rn < 5) res ("resolved with " + rn);
        else re ("rejected with" + rn);
    
    } , 1000);
});

async function abcd(){
    try {
        let val = await prb;
        console.log(val);

    } catch (err){
        console.log(err);
    }
}
abcd();