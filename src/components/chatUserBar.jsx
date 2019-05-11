import React from 'react';



class ProfileBar extends React.Component {


	render () {
		return(
			<div className='chat-profile-wrapper'>
				<div className='chat-sender-profile'>
					<div className='chat-sender-img'></div>
					<div className='chat-sender-name'></div>
				</div>
				<div className='sender-options-wrapper'>
					<div className='search-chat'>

					</div>
					<div className='attachment'>

					</div>
					<div className='chat-settings'>

					</div>
				</div>
			</div>
		)
	}
}

export default ProfileBar;