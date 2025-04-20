import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonPanel from './ButtonPanel';

function App() {
  const [count, setCount] = useState(0)
  const handleSave = () => alert('Saved!');
  const handleCancel = () => alert('Canceled!');
  const handleDelete = () => alert('Deleted!');

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
 <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ButtonPanel onSave={handleSave} onCancel={handleCancel} onDelete={handleDelete} />
    </div>     </p>
    </>
  )
}

export default App
