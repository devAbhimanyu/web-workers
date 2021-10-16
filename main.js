(() => {
  console.log("this run on main threade");
})();

//example payload
const sumOfIndex = [
  1,
  2,
  1,
  21,
  2,
  1,
  21,
  32,
  13,
  123,
  1,
  24,
  35,
  1,
  ,
  324,
  1,
  234,
  1234,
  12,
  34,
  1234,
  12,
  34,
  1,
  3423,
  41,
  234,
  1,
  324,
  2,
  41,
  234,
  1234,
  12,
  34,
  12,
  34,
  1234,
  23,
  41,
  34,
  1,
  324,
  1,
  23,
  46,
  23,
  6,
  1,
  61,
  6,
  4,
  5,
];

//checking to see if worker available
if (window.Worker) {
  //initialising worker, with the name of the file
  const worker = new Worker("testWorker.js");

  // once the worker posts a message(returns the value)
  // you can listen the event to perform required operations
  worker.onmessage = (e) => {
    console.log("this is coming from the wokrer", e);
    // terminate worker instance if its required.
    // worker.terminate();
  };

  //create even call to the worker
  worker.postMessage({ tt: sumOfIndex });
}
