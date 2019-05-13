import React from 'react';
import PropTypes from 'prop-types';


class RecieveChatBubble extends React.Component {


	render() {

		const { text } = this.props;
		return(
			<div className='recieve-msg-wrapper tri-right left-top'>
				<div className='recieve-msg'>
					{text}
				</div>
			</div>
		)
	}
}


export default RecieveChatBubble;

RecieveChatBubble.propTypes = {
	text: PropTypes.string.isRequired
}