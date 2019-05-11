import React from 'react';

import { connect } from 'react-redux';

import UserStrip from '../components/userStrip';

class UserList extends React.Component {

	render() {

		const users = this.props.users; 
		return(
			<div className='userlist-wrapper'>

			{ users && users.map(users => (
				<UserStrip key={users.id} id={users.id} name={users.name} imageURL={users.imageURL} latestMessage={users.messages[users.messages.length-1]} />
			))}
			</div>
		)
	}
}




export default UserList;