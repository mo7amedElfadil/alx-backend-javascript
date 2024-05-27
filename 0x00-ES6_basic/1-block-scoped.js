// exploring block scoping
// variables declared with const and let are block-scoped
// variables declared with var are function-scoped
// block scoping is a way to limit the scope of variables to a block of code
// a block of code is defined by a pair of curly braces {}
export default function taskBlock (trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
