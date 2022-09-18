import { Link } from 'react-router-dom';

import logo from '../../img/logo_1.png';
import './Navbar.scss';

export default function Navbar() {
  return (
    <header className='nav-container'>
      <img className='nav-logo' src={logo} alt={logo}/>
      <nav className='nav-links'>
          <Link to='/'>Accueil</Link>
          <Link to='/'>Profil</Link>
          <Link to='/'>Réglages</Link>
          <Link to='/'>Communauté</Link>
      </nav>
    </header>
  );
}