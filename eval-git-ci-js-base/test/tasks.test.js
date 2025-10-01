const { getTasks, reset, addTask, toggleTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

const { getTasks, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
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