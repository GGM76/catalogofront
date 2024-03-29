import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductoForm from './components/ProductoForm'
import ProductoDetial from './components/ProductoDetial'
import ModificarProducto from './components/ModificarProducto'

function App() {


  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='productos/crear' element={<ProductoForm />} />
            <Route path= {`productos/:sku/modificar`} element={<ModificarProducto />} />
            <Route path= {`productos/:sku`} element={<ProductoDetial />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
