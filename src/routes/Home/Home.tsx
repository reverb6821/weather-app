import { Helmet } from 'react-helmet';
import * as React from 'react';

const Home: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return(
    <React.Fragment>
      <Helmet>
        <title>Weather App - Home</title>
        <meta name="home" content="react wheather app home page" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-3xl font-bold underline">
          Hello world!
          </h1>
        </div>
        <div className="card">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
          </button>
          <p>
          Edit <code>src/RootComponent.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>
      </div>
    </React.Fragment>
  )}

export default Home