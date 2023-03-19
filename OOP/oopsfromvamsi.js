class Login {
    #password
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.#password = password;
    }
    loginsuccess(username, password) {
        if (username == this.username && password == this.#password) {
            console.log("login success")
        }
        else {
            console.log("username not found")
        }
    }
    getpassword() {
        return this.#password
    }
    setpassword(newpassword) {
        this.#password = newpassword;

    }

}
class Admin extends Login {
    constructor(username, password) {
        super(username, password)
    }
    removeUser(userId) {
        console.log("removed")
    }
}
class User extends Login {
    constructor(userId, username, password) {
        super(username, password);
        this.userId = userId;
    }
    activity() {
        console.log("done")
    }
}
const p1 = new Login("shakul", "smalik", "123456");
const p2 = new Login("vamsi", "vk", "2345");
const a1 = new Admin("krishna", "890");
const u1 = new User("01", "krish", "000");
a1.loginsuccess("krishna", "890");
p1.removeUser("011")

// p1.loginsuccess("mailk", "1234");
// console.log(p1.password)
// console.log(p1.getpassword())
// p1.setpassword("123")
// console.log(p1.getpassword())
// p2.loginsuccess("vk", "2345")
