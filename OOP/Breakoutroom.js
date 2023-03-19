class student{
#Pswd
    constructor(name, rollNo, Section, Pswd){
        this.name = name;
        this.rollNo = rollNo;
        this.Section = Section;
        this.#Pswd = Pswd;
    }
    loginSuccess (userName, Password){
        if(userName == this.name && Password == this.#Pswd ){
            console.log("login Successful")
        }else{
            console.log("invalid password")
        }
        
    }
    getSection(){
        return this.Section
    }
    getRollNo(){
        return this.rollNo
    }
    getPassword(){
        return this.#Pswd
    }
    setPassword(newPassword){
        this.#Pswd =  newPassword
    }

}

class Teacher extends student{
    constructor(name, Pswd){
        super(name, Pswd)
    }
    getStudentDetails(){
        return this.name
    }
}