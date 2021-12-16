const express = require('express');
const app = express();

const Project = require('./Project');
const User = require('./User');
const Bug = require('./Bug');
const MP = require('./MP');
const TST = require('./TST');

const port = 2000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const projectRouter = express.Router();
app.use('/api',projectRouter);

app.get('/', (req, res) => {
    res.send('Bug Testing V1'); 
});

app.listen(port, () => {
    console.log("Running on port " + port );
});

projectRouter.route('/project/projectID')   //request parameter
    .put((req,res)=>{
        let projectModif = projects.find(x=> x.id === req.params.projectID());
        projectModif.repository = req.body.repository;
        projectModif.MPList = req.body.MPList;
        projectModif.TSTList = req.body.TSTList;
        projectModif.bugList = req.body.bugList;
        return res.json(projectModif);
    })

let bug1 = new Bug(1, "bug1", "1", "link1", "severe", "solved");
let bug2 = new Bug(2, "bug2", "2", "link2", "mild", "unsolved");
let bugs = [bug1, bug2];

let users = [new User(1, "user1@stud.ase.ro", "user1",  "pswd1"),
    new User(2, "user2@stud.ase.ro", "user2",  "pswd2"),
    new User(3, "user3@stud.ase.ro", "user3",  "pswd3")];

let members = [new MP(1, "user1@stud.ase.ro", "user1",  "pswd1", bugs[0]),
            new MP(3, "user3@stud.ase.ro", "user3",  "pswd3", bugs[1])];

let testers = [new TST(2, "user2@stud.ase.ro", "user2",  "pswd2", bugs)]

let projects = [new Project(1, "Pr1", members, testers, bugs),
            new Project(2, "Pr2", members, testers, bugs)];

// console.log('Bugs');
// console.log(bugs);

// console.log('MP');
// console.log(members);

// console.log('TST');
// console.log(testers);

// console.log('Projects');
// console.log(projects);


projectRouter.route('/projects') 
    .get((req,res) => {
        let filteredProjects = [];
        if(req.query.repository) {
            filteredProjects = projects.filter(x => x.repository === req.query.repository);
        }
        else
        {
            filteredProjects = projects;
        }
        res.json(filteredProjects);
    })

    .post((req, res) => {
        let newProject = new Project(req.body.id, req.body.repository, req.body.MPList, req.body.TSTList, req.body.bugList);

        projects.push(newProject);

        console.log(projects);

        return res.json(newProject);
        
    })

projectRouter.route('/bugs/bugsID')
    .put((req,res)=>{
        let bugMod = bugs.find(x=> x.id === req.params.bugsID());
        bugMod.description = req.body.description;
        bugMod.priority = req.body.priority;
        bugMod.severity = req.body.severity;
        bugMod.status = req.body.status;
        bugMod.link = req.body.link;
        return res.json(bugMod);
    })


projectRouter.route('/projects/bugs') 
    .get((req,res) => {
        let filteredBugs = [];
        if(req.query.repository) {
            filteredBugs = bugs.filter(x => x.bugStatus === req.query.bugStatus);
        }
        else
        {
            filteredBugs = bugs;
        }
        res.json(filteredBugs);
    })

    .post((req, res) => {
        let newBug = new Bug(req.body.id, req.body.description, req.body.priority, req.body.severity, req.body.bugStatus, req.body.link);

        bugs.push(newBug);

        console.log(bugs);

        return res.json(bugs);
        
    })