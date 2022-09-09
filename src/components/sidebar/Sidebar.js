import './Sidebar.scss';

import side_icon_1 from '../../img/side_icon_1.svg';
import side_icon_2 from '../../img/side_icon_2.svg';
import side_icon_3 from '../../img/side_icon_3.svg';
import side_icon_4 from '../../img/side_icon_4.svg';

export default function Sidebar() {
  return (
    <navbar className='side-nav-container'>
        <img src={side_icon_1} alt={side_icon_1} className='side-nav-btn' />
        <img src={side_icon_2} alt={side_icon_2} className='side-nav-btn' />
        <img src={side_icon_3} alt={side_icon_3} className='side-nav-btn' />
        <img src={side_icon_4} alt={side_icon_4} className='side-nav-btn' />
        <span className='side-nav-copyritghs'>Copiryght, SportSee 2020</span>
    </navbar>
  );
}