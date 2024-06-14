import { useState } from 'react'

function RootComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default RootComponent
