import React from 'react';

import SentChatBubble from '../components/sentChatBubble';
import RecieveChatBubble from '../components/recieveChatBubble';


class ChatHistory extends React.Component {


	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	scrollToBottom = () => {

		if(this.messageBottom){
			console.log(this.messageBottom)
			const scrollHeight = this.messageBottom.scrollHeight;
			const height = this.messageBottom.clientHeight;
			const maxScrollTop = scrollHeight - height;
			this.messageBottom.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
		}
	}

	//TODO add timestamp
	render() {

		const { messages } = this.props;
		return(
			<div className='chat-history-wrapper'>
				<div className='message-history-wrapper' ref={(el) => {this.messageBottom = el;}}>
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
			</div>
		)
	}

}


export default ChatHistory;