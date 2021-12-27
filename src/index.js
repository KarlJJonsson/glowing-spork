import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom'

import './style/main.css'
import App from './App'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
