import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuhtContext.jsx'
import TaskContext from './context/Task.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthContext>
    <TaskContext>
    <App />
    </TaskContext>
   </AuthContext>
  </StrictMode>,
)
