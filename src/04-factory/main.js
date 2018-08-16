const Task = require('./task');
const ProjectRepo = require('./projectRepository');
const TaskRepo = require('./taskRepository');
const UserRepo = require('./userRepository');

console.log('');
console.log('---------------------------------------');
console.log('       No usage of Factory Pattern     ');
console.log('---------------------------------------');
console.log('');

let task1 = new Task(TaskRepo.get(1));

let user = UserRepo.get(1);
let project = ProjectRepo.get(1);

task1.user = user;
task1.project = project;

console.log('task1:', task1);
task1.save();
