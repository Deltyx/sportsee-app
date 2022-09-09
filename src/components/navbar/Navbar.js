import logo from '../../img/logo_1.png';
import './Navbar.scss';

export default function Navbar() {
  return (
    <navbar className='nav-container'>
        <img src={logo} alt={logo} className='nav-logo'/>
        <button className='nav-btn'>Accueil</button>
        <button className='nav-btn'>Profil</button>
        <button className='nav-btn'>Réglage</button>
        <button className='nav-btn'>Communauté</button>
    </navbar>
  );
}