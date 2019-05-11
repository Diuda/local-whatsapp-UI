import React from 'react';


class SentChatBubble extends React.Component {


	render() {

		const { text } = this.props;
		return(
			<div className='sent-msg-wrapper tri-right left-top'>
				<div className='sent-msg'>
					{text}
				</div>
			</div>
		)
	}
}


export default SentChatBubble;