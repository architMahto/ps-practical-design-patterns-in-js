let Task = function (name) {
	this.name = name;
	this.completed = false;
};

Task.prototype.complete = function() {
	console.log('Completing task:', this.name);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log('Saving Task:', this.name);
};

console.log('');
console.log('---------------------------------------');
console.log('              Prototypes               ');
console.log('---------------------------------------');
console.log('');

let task1 = new Task('Create a demo for constructors');
let task2 = new Task('Create a demo for modules');
let task3 = new Task('Create a demo for singletons');
let task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
