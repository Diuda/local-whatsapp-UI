import React from 'react';

import SentChatBubble from '../components/sentChatBubble';
import RecieveChatBubble from '../components/recieveChatBubble';


class ChatHistory extends React.Component {


	//TODO add timestamp
	render() {

		const { messages } = this.props;
		return(
			<div className='chat-history-wrapper'>
				{
					messages.map(message => (
						message.action === 'sent' ? 
						(
							<SentChatBubble text={message.text} />
						)
						:
						( <RecieveChatBubble text={message.text} /> )
					))
				}
			</div>
		)
	}

}


export default ChatHistory;