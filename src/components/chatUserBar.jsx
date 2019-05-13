import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperclip, faEllipsisV } from '@fortawesome/free-solid-svg-icons';


class ProfileBar extends React.Component {


	render () {

		const { name, imageURL } = this.props;
		return(
			<div className='chat-profile-wrapper'>
				<div className='chat-sender-profile'>
					<div className='chat-sender-img'>
						<img src={`/assets/images/${imageURL}`} alt="friend image"/>
					</div>
					<div className='chat-sender-name'>{name}</div>
				</div>
				<div className='sender-options-wrapper'>
					<div className='search-chat'>
						<FontAwesomeIcon icon={faSearch} />
					</div>
					<div className='attachment'>
						<FontAwesomeIcon icon={faPaperclip} />
					</div>
					<div className='chat-settings'>
						<FontAwesomeIcon icon={faEllipsisV} />
					</div>
				</div>
			</div>
		)
	}
}

export default ProfileBar;

ProfileBar.propTypes = {
	name: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired
}