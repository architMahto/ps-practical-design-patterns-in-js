import Task from './task';
import AuditingService from './auditingService';
import LoggingService from '/loggingService';
import NotificationService from './notificationService';
import ObserverList from './observerList';

console.log('');
console.log('---------------------------------------');
console.log('               Observer                ');
console.log('---------------------------------------');
console.log('');

const auditingService = new AuditingService();
const loggingService = new LoggingService();
const notificationService = new NotificationService();

let task1 = new Task({
	name: 'Create a demo for constructor',
	user: 'Jon'
});

task1.save();
