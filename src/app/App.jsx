import { useEffect, useState } from 'react';

import '../styles/index.scss';

const worker = new Worker(new URL('../wokers/sumWorker.js', import.meta.url), {
  type: 'module',
});

export default function App() {
  const [sum, setsum] = useState(0);
  useEffect(() => {
    worker.postMessage({
      a: 100,
      b: 200,
    });
    worker.onmessage = ({ data }) => {
      console.log(data);
      setsum(data);
    };
  }, []);
  return <main>React {sum} + Webpack5</main>;
}
