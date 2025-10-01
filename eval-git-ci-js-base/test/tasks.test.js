const { getTasks, reset, addTask, toggleTask, countDone } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

beforeEach(() => {
  reset();
});

// FIXED: use public API instead of direct array manipulation
test('toggleTask toggles the done state of a task', () => {
  const task = addTask('Test task');
  expect(task.done).toBe(false);

  const toggledTask = toggleTask(task.id);
  expect(toggledTask.done).toBe(true);
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('toggleTask toggles the done state of a task', () => {
  const task = addTask('Test toggle');
  expect(task.done).toBe(false);

  const toggled = toggleTask(task.id);
  expect(toggled.done).toBe(true);

  const toggledAgain = toggleTask(task.id);
  expect(toggledAgain.done).toBe(false);
});

test('toggleTask throws error if task not found', () => {
  expect(() => toggleTask(999)).toThrow('Task with id 999 not found');
});

test('countDone counts tasks marked done', () => {
  addTask('task 1');
  const task2 = addTask('task 2');
  toggleTask(task2.id);
  expect(countDone()).toBe(1);
  
  toggleTask(task2.id);
  expect(countDone()).toBe(0);
});

test('countDone returns 0 if no tasks', () => {
  expect(countDone()).toBe(0);
});