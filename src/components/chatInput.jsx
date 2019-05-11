import React from 'react';


class ChatInput extends React.Component {


	render() {
		return(
			<div className='chat-wrapper'>
				<div className='emoji-btn'></div>
				<div className='chat-input-wrapper'>
					<input type="text" name="chat-input"/>
				</div>
				<div className='voice-btn'></div>
			</div>
		)
	}
}


export default ChatInput;