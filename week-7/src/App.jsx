import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => {
          navigate('/')
        }}>
          Go to Dashboard
        </button>
        <button onClick={() => {
          navigate('/landing')
        }}>
          Go to Landing page
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
