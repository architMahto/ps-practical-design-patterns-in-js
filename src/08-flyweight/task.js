export const Task = function (data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
};

export function TaskCollection() {
	let tasks = {};
	let count = 0;

	let add = function (data) {
		tasks[data.name] = new Task(data);
		count++;
	};

	let get = function (name) {
		return tasks[name];
	};

	let getCount = function () {
		return count;
	};

	return {
		add,
		get,
		getCount,
	};
}
