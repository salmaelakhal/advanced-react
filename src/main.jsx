import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './react-hook-form/Form.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './api-fetch-axios/Todos.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <hr style={{ borderTop: '3px solid #5b2a86', margin: '50px 0' }} />

    {/* <TodoList/> */}
    <TodoList/>

  </StrictMode>,
)
