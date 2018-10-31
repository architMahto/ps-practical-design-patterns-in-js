import Task from './task';

console.log('');
console.log('---------------------------------------');
console.log('               Observer                ');
console.log('---------------------------------------');
console.log('');

let task1 = new Task({
	name: 'Create a demo for constructor',
	user: 'Jon'
});

task1.save();
