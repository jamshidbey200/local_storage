import { useState } from 'react'
import './App.css'
import { useLocalStorage } from './components/UseLocalStorage'

function App() {
  const [value, setValue] = useState('')

  const { setItem, getItem, removeItem } = useLocalStorage('value')

  console.log('value', value)

  return (
    <>
      <div>
        <h1>Local Storage</h1>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='input' />
        <div>
          <button onClick={() => setItem(value)}>Set</button>
          <button onClick={() => console.log(getItem())}>Get</button>
          <button onClick={() => removeItem(value)}>Remove</button>
        </div>
      </div>
    </>
  )
}

export default App
