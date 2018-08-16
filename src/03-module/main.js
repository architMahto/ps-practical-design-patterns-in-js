import Task from './Task';
import TaskRepo from './taskRepository';

console.log('');
console.log('---------------------------------------');
console.log('                Module                 ');
console.log('---------------------------------------');
console.log('');

let task1 = new Task(TaskRepo.get(1));
let task2 = new Task({name: 'Create a demo for modules'});
let task3 = new Task({name: 'Create a demo for singletons'});
let task4 = new Task({name: 'Create a demo for prototypes'});

task1.complete();
task2.save();
task3.save();
task4.save();
