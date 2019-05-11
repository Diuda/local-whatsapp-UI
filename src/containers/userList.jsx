import React from 'react';

import UserStrip from '../components/userStrip';

class UserList extends React.Component {

	render() {
		return(
			<div className='userlist-wrapper'>
				<UserStrip />
			</div>
		)
	}
}


export default UserList;