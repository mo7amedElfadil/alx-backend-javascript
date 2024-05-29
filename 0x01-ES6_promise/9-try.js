/**
 * guardrail - create and return an array named queue. When mathFunction
 * executes, the value returned by mathFunction should be pushed onto the queue.
 * If the function throws an error, the error message should be pushed onto
 * the queue. In either case, the message 'Guardrail was processed'
 * should be pushed onto the queue.
 * @param {function} mathFunction
 * @returns {array} queue
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
