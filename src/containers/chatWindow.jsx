import React from 'react';

import { connect } from 'react-redux';

import ChatUserBar from '../components/chatUserBar';
import ChatInput from '../components/chatInput';
import ChatHistory from './chatHistory';
import FallbakChatWindow from '../components/fallbackChatWindow';




class ChatWindow extends React.Component {





	render() {
 

		const activeUser = this.props.activeUser;
		//TODO fallbackUI
		return(
			<div className='right-side-bar'>
				{
					activeUser ?
					(
						<div className='friend-chat-wrapper'>
							<ChatUserBar name={this.props.users[activeUser-1].name} imageURL={this.props.users[activeUser-1].imageURL} />
							<ChatHistory  messages={this.props.users[activeUser-1].messages} />
							<ChatInput />
						</div>
					):
					(
						<FallbakChatWindow />
					)
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