class User {
    constructor (id, email, name, pswd)
    {
        this.id = id;
        this.email = email;
        this.name = name;
        this.pswd = pswd;
    }
}

// class MP extends User {
//     constructor (id, email, name, pswd, bug)
//     {
//         super(id, email, name, pswd);
//         this.bug = bug;
//     }
// }

// class TST extends User {
//     constructor (id, email, name, pswd, bugList){
//         super(id, email, name, pswd);
//         this.bugList = bugList;
//     }
// }

module.exports = User;