const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('peek on stack a stack with 8 returns the lenght of 8', () => {
    //eftersom vi redan lagt till fyra i listan, behöver vi bara lägga till 4 till
  stack.push(5);
  stack.push(40);
  stack.push(9);
  stack.push(9);
  expect(stack.displayLength()).toBe(8);
});
