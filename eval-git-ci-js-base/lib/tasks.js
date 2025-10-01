
// Simple in-memory task list
let tasks = [];
let nextId = 1;

function addTask(name) {
  if (typeof name !== 'string') throw new Error('Invalid name');
  return {
    id: Date.now(),
    name: name.trim(),
    done: false
  };
}

function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset };
