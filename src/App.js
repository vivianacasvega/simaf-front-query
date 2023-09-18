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
import DashCVTOOLS from './components/dashboardCVTOOLS/dashcvtools';
import DashCards from './components/dashboardCards/dashcards';
import DashPSNC from './components/dashboardPSNC/dashpsnc';
import DashPQRS from './components/dashboardPQRS/dashpqrs'; 
import DashFinding from './components/dashboardFinding/dashfinding'; 
import DashGportal from './components/dashboardGportal/dashgportal'; 
import DashGeneral from './components/dashboardGeneral/dashgeneral'; 

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
        <Route exact path='/dash-cvtools' element={<DashCVTOOLS />} />
        <Route exact path='/dash-pqrs' element={<DashPQRS />} />
        <Route exact path='/dash-psnc' element={<DashPSNC />} />
        <Route exact path='/dash-tarjetas' element={<DashCards />} />
        <Route exact path='/dash-hallazgos' element={<DashFinding/>} />
        <Route exact path='/dash-gportal' element={<DashGportal/>} />
        <Route exact path='/dash-parametrizacion' element={<DashGeneral/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;