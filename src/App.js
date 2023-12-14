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
import AddCounter from './pages/AddCounter';
import EditCounter from './pages/EditCounter';
import AddPartner from './pages/AddPartner';
import EditPartners from './pages/EditPartners';
import AddProgram from './pages/AddProgram';
import EditProgram from './pages/EditProgram';
import AddTestimony from './pages/AddTestimony';
import EditTestimony from './pages/EditTestimony';
import AddVolunteer from './pages/AddVolunteer';
import EditVolunteer from './pages/EditVolunteer';
import Finances from './pages/Finances';
import AddFinance from './pages/AddFinance';

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
          <Route path='/counters/add' element={<AddCounter />}></Route>
          <Route path='/counters/edit/:id' element={<EditCounter />}></Route>

          <Route path='/finances' element={<Finances />}></Route>
          <Route path='/finances/add' element={<AddFinance />}></Route>


          <Route path='/partners' element={<Partners />}></Route>
          <Route path='/partners/add' element={<AddPartner />}></Route>
          <Route path='/partners/edit/:id' element={<EditPartners />}></Route>

          <Route path='/programs' element={<Programs />}></Route>
          <Route path='/programs/add' element={<AddProgram />}></Route>
          <Route path='/programs/edit/:id' element={<EditProgram />}></Route>

          <Route path='/testimonies' element={<Testimonies />}></Route>
          <Route path='/testimonies/add' element={<AddTestimony />}></Route>
          <Route path='/testimonies/edit/:id' element={<EditTestimony />}></Route>

          <Route path='/volunteers' element={<Volunteers />}></Route>
          <Route path='/volunteers/add' element={<AddVolunteer />}></Route>
          <Route path='/volunteers/edit/:id' element={<EditVolunteer />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
