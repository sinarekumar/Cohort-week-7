import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import React, { Suspense } from 'react'
const Dashboard = React.lazy(() => import('./Components/Dashboard'))
const Landing = React.lazy(() => import('./Components/Landing'))

function App() {

  return (
    <>

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loadinfg..."}><Dashboard /></Suspense>} />
          <Route path='/landing' element={<Suspense fallback={"Loadinfg..."}><Landing /></Suspense>} />
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
