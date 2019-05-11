import React from 'react';


class RecieveChatBubble extends React.Component {


	render() {

		const { text } = this.props;
		return(
			<div className='recieve-msg-wrapper tri-right right-top'>
				<div className='recieve-msg'>
					{text}
				</div>
			</div>
		)
	}
}


export default RecieveChatBubble;