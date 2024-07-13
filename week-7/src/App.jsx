import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'

function App() {

  return (
    <>

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate('/dashboard');
      }}>
        Go to Dashboard
      </button>
      <button onClick={() => {
        navigate('/landing');
      }}>
        Go to Landing page
      </button>
    </div>
  )

}

export default App
