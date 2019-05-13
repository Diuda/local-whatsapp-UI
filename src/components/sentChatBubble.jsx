import React from 'react';
import PropTypes from 'prop-types';


class SentChatBubble extends React.PureComponent {


	render() {

		const { text } = this.props;
		return(
			<div className='sent-msg-wrapper tri-right right-top'>
				<div className='sent-msg'>
					{text}
				</div>
			</div>
		)
	}
}


export default SentChatBubble;


SentChatBubble.propTypes = {
	text: PropTypes.string.isRequired
}
