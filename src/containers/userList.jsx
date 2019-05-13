import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import UserStrip from '../components/userStrip';

class UserList extends React.Component {

	render() {
		const users = this.props.users; 
		return(
			<div className='userlist-wrapper'>

			{ users && users.map(users => (
				
				<UserStrip key={users.id} active={users.id===this.props.activeUser} id={users.id} name={users.name} imageURL={users.imageURL} latestMessage={users.messages[users.messages.length-1]} />
			))}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		activeUser: state.chat.activeUser
	}
}


export default connect(mapStateToProps, null)(UserList);


UserList.propTyes = {
	users: PropTypes.array.isRequired
}