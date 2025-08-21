import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Layout from './layout/Layout'
import BackToHome
 from './components/BackToHome'
import ContactUs from './views/ContactUs'
import Login from './views/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />} index/>
        </Route>
        <Route element={<BackToHome />}>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter