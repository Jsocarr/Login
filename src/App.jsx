import { Route, Routes } from 'react-router-dom'
import { useLogin } from './pages/Login/hooks/useLogin';
import { Login, Home } from './pages'
import { useEffect } from 'react';

function App() {

  const { checkSesion } = useLogin();
  useEffect(() => {
    checkSesion();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </>
  )
}

export default App