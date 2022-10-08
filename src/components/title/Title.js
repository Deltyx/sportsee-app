import PropTypes from 'prop-types';

import './Title.scss';

export default function Title({firstName}){
    return (
        <div className='title-wrapper'>
            <div className='title'>Bonjour <h1>{firstName}</h1></div>
            <div className='title-description'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    )
}

Title.propTypes = {
    firstname: PropTypes.string.isRequired
}