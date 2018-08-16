let Task = function (name) {
	this.name = name;
	this.completed = false;

	this.complete = function () {
		console.log('Completing task:', this.name);
		this.completed = true;
	};

	this.save = function () {
		console.log('Saving Task:', this.name);
	};
};

let task1 = new Task('Create a demo for constructors');
let task2 = new Task('Create a demo for modules');
let task3 = new Task('Create a demo for singletons');
let task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
