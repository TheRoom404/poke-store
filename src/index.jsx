import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize-css'
import './assets/styles/reset.css'
import './assets/styles/test.css' // BORDERS
import './assets/styles/colors.css'

ReactDOM.render(
  <StrictMode>
      <App />
  </StrictMode>,
  document.getElementById('root')
)