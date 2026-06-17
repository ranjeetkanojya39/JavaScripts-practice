class CreatePenncil {
    constructor(name , company , price , color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    erase(){
        document.body.querySelectorAll("h1").forEach(h1 => {
            if (h1.style.color === this.color){
                h1.remove();
            }
        })
    }
    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}
let pencil1 = new CreatePenncil('pencil' , 'faber' , 20 , 'red');
let pencil2 = new CreatePenncil('pencil' , 'faber' , 20 , 'blue');



