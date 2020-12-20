import React from 'react'
import ReactDOM from 'react-dom'
import { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

registerLocale('ru', ru)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
