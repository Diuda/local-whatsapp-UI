import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { userChatHistory } from '../actions/index';


//sidebar user strip component
class UserStrip extends React.Component {


	//dispatch user chat history action
	openChat = () => {
		const id = this.props.id;
		this.props.userSelected(id);

	}

	render() {

		//props passed from userlist with each user info
		const { active, name, imageURL, latestMessage } = this.props;

		return (
			<div className={active?'userStrip-Wrapper active-userStrip': 'userStrip-Wrapper'} onClick={this.openChat}>
				<div className='avatar'>
					<img src={`/assets/images/${imageURL}`} alt="user profile avatar"/>
				</div>
				<div className='username-message-wrapper'>
					<div className='username'>
						<span>{name}</span>
					</div>
					<div className='latest-msg'>
						<span>{latestMessage.text}</span>
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


const mapDispatchToProps = dispatch => {
	return {
		userSelected: (id) => dispatch(userChatHistory(id))
	};
};



export default connect(null, mapDispatchToProps)(UserStrip);

UserStrip.propTypes = {
	name: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired,
	latestMessage: PropTypes.object
}