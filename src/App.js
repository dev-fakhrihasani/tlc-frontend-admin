import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Products from './pages/Products';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Counters from './pages/Counters';
import Blogs from './pages/Blogs';
import Partners from './pages/Partners';
import Programs from './pages/Programs';
import Testimonies from './pages/Testimonies';
import Volunteers from './pages/Volunteers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/add' element={<AddUser />}></Route>
          <Route path='/users/edit/:id' element={<EditUser />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/add' element={<AddProduct />}></Route>
          <Route path='/products/edit/:id' element={<EditProduct />}></Route>

          <Route path='/blogs' element={<Blogs />}></Route>

          <Route path='/counters' element={<Counters />}></Route>

          <Route path='/partners' element={<Partners />}></Route>

          <Route path='/programs' element={<Programs />}></Route>

          <Route path='/testimonies' element={<Testimonies />}></Route>

          <Route path='/volunteers' element={<Volunteers />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
