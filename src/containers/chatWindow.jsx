import React from 'react';

import ChatUserBar from '../components/chatUserBar';
import ChatInput from '../components/chatInput';



class ChatWindow extends React.Component {


	render() {
		return(
			<div className='chat-wrapper'>
				<ChatUserBar />
				<ChatInput />
			</div>
		)
	}
}

export default ChatWindow;