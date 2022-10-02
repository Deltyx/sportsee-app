import './Nutrition_Card.scss';

import PropTypes from 'prop-types';

export default function Nutrition_Card({icon, data, id, type}){
    
    return(
        <div className='Nutrition_Card-wrapper' key={id}>
            <img className='Nutrition_Card-icon'  src={icon} alt={icon}/>
            <div className='Nutrition_Card-text'>
                <div className='Nutrition_Card-data'>{data}</div>
                <div className='Nutrition_Card-type'>{type}</div>
            </div>
        </div>
    )
}

Nutrition_Card.propTypes={
    data: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
}