// const { sum } = require('../util/index');
self.onmessage = ({ data }) => {
  const { a, b } = data;
  console.log(data);
  self.postMessage(a + b);
};
