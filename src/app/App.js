import './App.scss';
import Navbar from '../components/navbar/Navbar.js';
import Dashboard from '../components/dashboard/Dashboard.js';

function App() {
  return (
    <section className="container">
      <Navbar />
      <Dashboard />
    </section>
  );
}

export default App;
