import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/scss/theme.scss';
import './styles.css';
import Dashboard from './pages/Dashboard';
import Approvals from './pages/parametrization/approvals/Index';
import ApprovalsTableQuery from './pages/parametrization/approvals/IndexQuery';
import Cash from './pages/parametrization/cash/Index';
import CashTableQuery from './pages/parametrization/cash/IndexQuery';
import GeneralDash from './pages/parametrization/general/Index';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/auth/:token' element={<Login />} />
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/dashboard' element={<Dashboard />} />

        <Route exact path='/approvals' element={<Approvals />} />
        <Route exact path='/approvalsquery' element={<ApprovalsTableQuery />} />

        <Route exact path='/cash' element={<Cash />} />
        <Route exact path='/cashquery' element={<CashTableQuery />} />

        <Route exact path='/general' element={<GeneralDash />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;