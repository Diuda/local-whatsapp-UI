import React from 'react';

import { connect } from 'react-redux';

import ChatUserBar from '../components/chatUserBar';
import ChatInput from '../components/chatInput';
import ChatHistory from './chatHistory';




class ChatWindow extends React.Component {

	render() {
 

		const activeUser = this.props.activeUser;
		//TODO fallbackUI
		return(
			<div className='friend-chat-wrapper'>
				{
					activeUser ?
					(
						<div>
							<ChatUserBar name={this.props.users[activeUser-1].name} imageURL={this.props.users[activeUser-1].imageURL} />
							<ChatHistory messages={this.props.users[activeUser-1].messages} />
							<ChatInput />
						</div>
					):null
				}
			</div>
		)
	}
}


const mapStateToProps = state => {
	return { 
		activeUser: state.chat.activeUser,
		users: state.chat.users
	};
}



export default connect(mapStateToProps, null)(ChatWindow);