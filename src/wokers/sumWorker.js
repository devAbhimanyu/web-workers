import sum from './index';
self.onmessage = ({ data }) => {
  const { a, b } = data;
  // self.importScripts('main.js');
  console.log(data);
  self.postMessage(a + b);
};
