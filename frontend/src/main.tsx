import React from 'react'
import ReactDOM from 'react-dom/client'
//
import { BrowserRouter } from "react-router-dom"
import { MainProvider } from './context/main.context'
//Application.
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>,
)
