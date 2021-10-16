//you cannot access the window object here
//listen to postmessage from main.js
this.onmessage = (e) => {
  //check whether the postMessage is for right call
  if (e.data.tt) {
    // import required scripts, this and window cannot be accessed, self is used access some window APIs
    self.importScripts("util.js");
    console.log(e);
    const { tt = [] } = e.data;
    // return response to onmessage for the worker
    postMessage({ res: getSum(tt) });
  }
};
