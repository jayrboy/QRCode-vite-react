import { useState } from 'react'
import QRCode from 'react-qr-code'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')
  function handleChange(e) {
    setText(e.target.value)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>QR Code Generator</h1>
      <QRCode value={text} />
      <div>
        <p>Enter your text here</p>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </div>
    </>
  )
}

export default App
