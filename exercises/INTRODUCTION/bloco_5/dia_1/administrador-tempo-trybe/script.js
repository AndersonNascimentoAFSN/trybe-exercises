const body = document.querySelector('body');
const header = document.querySelector('#header-container');
const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyTaskTitle = document.querySelectorAll('.no-emergency-tasks h3');
const emergencyTasks = document.querySelector('.emergency-tasks');
const noEmergencyTask = document.querySelector('.no-emergency-tasks');
const footerContainer = document.querySelector('#footer-container');

body.style.cssText = 'background: rgb(245,245,245); ';
header.style.cssText = 'background: green; padding: 25px';
emergencyTasks.style.cssText = 'background: orange; ';
noEmergencyTask.style.cssText = 'background: yellow; ';
footerContainer.style.cssText = 'background: rgb(16,16,16); ';

emergencyTasksTitle.forEach((task) => {
  task.style.cssText = 'background: purple; ';
});

noEmergencyTaskTitle.forEach((task) => { 
  task.style.cssText = 'background: black; ';
});
