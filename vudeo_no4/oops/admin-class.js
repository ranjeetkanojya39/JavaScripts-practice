class User{
    constructor(name , address ,usrname , email , password , color){
        this.name = name;
        this.address = address;
        this.usrname = usrname;
        this.email = email;
        this.password = password;
        this.color = color;
    }
    remove(){
         document.body.querySelectorAll("h1").forEach((h1) => {
             if(h1.textContent.includes(this.name)){
                 document.body.removeChild(h1);
             }
         });
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name , address ,usrname , email , password , color){
        super(name , address ,usrname , email , password , color);
        this.role = "admin"
    }
}
let u1 = new User("John Doe", "123 Main St", "johndoe", "john@example.com", "password12", "blue");
let u2 = new User("ranjeet", "12 Main St", "ranjeet", "ranjeet@example.com", "password456", "green");
let a1 = new Admin("Alice Smith", "456 Oak Ave", "alicesmith", "alice@example.com", "password789", "red");
