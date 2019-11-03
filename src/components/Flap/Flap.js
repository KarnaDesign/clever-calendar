import React from 'react';
import './Flap.scss';
import PropTypes from 'prop-types';

const Flap = props => {
	const [isOpen, toggleIsOpen] = React.useState(false);
	return (
		<div className="flap" style={{ backgroundColor: props.backgroundColor }}>
			<p>{props.text}</p>
			<div className={`foregroundFlap ${isOpen ? 'open' : ''}`} onClick={() => toggleIsOpen(true)}>
				<p>{props.day}</p>
			</div>
		</div>
	);
};

Flap.propTypes = {
	day: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Flap;
