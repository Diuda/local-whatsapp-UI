import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch ,faEnvelope, faEllipsisV } from '@fortawesome/free-solid-svg-icons'



class ProfileBar extends React.Component {


	render () {
		return(
			<div className='profile-wrapper'>
				<div className='profile-img'>
					<img src="/assets/images/profile1.jpg" alt="user profile"/>
				</div>
				<div className='options-wrapper'>
					<div className='status'>
						<FontAwesomeIcon icon={faCircleNotch} />
					</div>
					<div className='new-chat'>
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
					<div className='settings'>
						<FontAwesomeIcon icon={faEllipsisV} />
					</div>
				</div>
			</div>
		)
	}
}

export default ProfileBar;