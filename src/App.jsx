import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500 text-white'>This is h1 header</h1>

      <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
      Primary count is {count}
      </button>
    </>
  )
}

export default App
