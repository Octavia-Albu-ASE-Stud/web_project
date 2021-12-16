class Project {
    constructor (id, repository, MPList, TSTList, bugList)
    {
        this.id = id;
        this.repository = repository;
        this.MPList = MPList;
        this.TSTList = TSTList;
        this.bugList = bugList;
    }
}

module.exports = Project;