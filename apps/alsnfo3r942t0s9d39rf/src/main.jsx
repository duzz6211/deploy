import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// 배포 시 서브경로(vite --base) 아래에서 라우팅이 동작하도록 basename 지정.
// dev에서는 '', 빌드에서는 예: '/alsnfo3r942t0s9d39rf'
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
