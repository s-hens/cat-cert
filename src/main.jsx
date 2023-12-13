import React from 'react'
import ReactDOM from 'react-dom/client'
import CertText from "./cert-text.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="cert">
      <p>CertifiCATe of Achievement</p>
      <p>Awarded to</p>
      <CertText />
      <p>for</p>
    </div>
  </React.StrictMode>,
)
