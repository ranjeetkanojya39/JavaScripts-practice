// function CreateBisuits(name, price , qiy , company , category){
//     this.name = name;
//     this.price = price;
//     this.qiy = qiy;
//     this.company = company;
//     this.category = category;
// }

// let biscuit1 = new CreateBisuits("parleG" ,5 , 7,"parle" , "forway");
// let biscuit2 = new CreateBisuits("hide and seek" , 10 , 5 , "britania" , "forway");

function CreatePencil(name, price , color , company ){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
   
}  

    CreatePencil.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color =this.color;
        console.log(h1);
        document.body.append(h1);
    };

let pencil1 = new CreatePencil("natraj" , 5 , "blue" , "reliance");
let pencil2 = new CreatePencil("parker" , 10 , "black" , "parker");