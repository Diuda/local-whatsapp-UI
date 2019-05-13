import React from 'react';

import PropTypes from 'prop-types';

import SentChatBubble from '../components/sentChatBubble';
import RecieveChatBubble from '../components/recieveChatBubble';


class ChatHistory extends React.Component {


	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}


	//handler to scroll to bottom of chat automatically in case of many messages
	scrollToBottom = () => {

		if(this.messageBottom){
			const scrollHeight = this.messageBottom.scrollHeight;
			const height = this.messageBottom.clientHeight;
			const maxScrollTop = scrollHeight - height;
			this.messageBottom.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
		}
	}

	//TODO add timestamp
	//TODO Bubble can be refactored to be one instead of two
	render() {

		const { messages } = this.props;
		return(
			<div className='chat-history-wrapper'>
				<div className='message-history-wrapper' ref={(el) => {this.messageBottom = el;}}>
				{
					messages.map(message => (
						message.action === 'sent' ? 
						(
							<SentChatBubble key={message.id} text={message.text} />
						)
						:
						( <RecieveChatBubble key={message.id} text={message.text} /> )
					))
				}
				</div>
			</div>
		)
	}

}


export default ChatHistory;

ChatHistory.propTypes = {
	message: PropTypes.shape({
		test: PropTypes.string,
		action: PropTypes.string
	})
}