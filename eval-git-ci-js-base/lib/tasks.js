
// Simple in-memory task list
let tasks = [];
let nextId = 1;

function addTask(name) {
  if (typeof name !== 'string') throw new Error('Invalid name');
  const task = {
    id: Date.now(),
    name: name.trim(),
    done: false
  };
  tasks.push(task); // <-- Add this line
  return task;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error(`Task with id ${id} not found`);
  task.done = !task.done;
  return task;
}

function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, toggleTask, addTask };
