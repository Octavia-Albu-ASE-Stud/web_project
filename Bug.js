class Bug {
    constructor (id, description, priority, link, severity,  bugStatus) 
    {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.severity = severity;
        this.bugStatus = bugStatus;
        this.link = link;
    }
}

module.exports = Bug;