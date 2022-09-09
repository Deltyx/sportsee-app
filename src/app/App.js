import './App.scss';
import Navbar from '../components/navbar/Navbar.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import Dashboard from '../components/dashboard/Dashboard.js';

function App() {
  return (
    <section className="container">
      <Navbar />
      <Sidebar />
      <Dashboard />
    </section>
  );
}

export default App;
