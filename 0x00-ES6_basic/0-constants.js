// explore the use of const and let
// const and let are block-scoped
// const is used to declare variables that should not be reassigned
// let is used to declare variables that can be reassigned
// const and let are block-scoped

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
