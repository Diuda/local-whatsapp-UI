import React from 'react';



class UserStrip extends React.Component {
	

	render() {
		return (
			<div className='userStrip-Wrapper'>
				<div className='avatar'>
					<img src='/assets/images/profile1.jpg' alt="user profile avatar"/>
				</div>
				<div className='username-message-wrapper'>
					<div className='username'>
						<span>Diuda</span>
					</div>
					<div className='latest-msg'>
						<span>How are you</span>
					</div>
				
				</div>
				<div className='time-unread-wrapper'>
					<div className='msg-time'>

					</div>
					<div className='unread-msg'>

					</div>
				</div>
			</div>
		)
	}
}



export default UserStrip;