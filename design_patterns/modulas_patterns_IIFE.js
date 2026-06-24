// module pattern

// modulas pattren ek design pattren hai jisme ham apna code ek self excuteing function (IIFE) ke andar likhate hain taki varible or function private rahe 

// eske andar se ham serf wahi cheeje return katte hai jo bahar use karni hai 

// is pattren ka main faida hai date hiding ( encapsulation) aur clean structure taki code source reusebalee aur manageble bak sake 


let Bank = (function  (){
    let bankbalance = 1200;

  function checkbalance(){
    console.log(bankbalance);

  }

  function setBalance(val){
    bankbalance = val;
  }
  function withdraw(val){
    if (val <= bankbalance) {
        bankbalance -= val;
        console.log(bankbalance);
    }
  }
  return {
    checkbalance,
    setBalance,
    withdraw,
  };
})();

Bank.withdraw(110000)