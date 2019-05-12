import React from 'react';

import { connect } from 'react-redux';
import { sendMessage } from '../actions/index';


class ChatInput extends React.Component {


	handleSendMessage = (e) => {
		if(e.which === 13){
			this.props.sendMessage(this.props.activeUser, e.target.value)
			e.target.value = '';
		}
	}

	render() {
		return(
			<div className='chat-wrapper'>
				<div className='emoji-btn'></div>
				<div className='chat-input-wrapper'>
					<input type='text' autoComplete='off' name='chat-input' placeholder='Type a message' onKeyPress={this.handleSendMessage}/>
				</div>
				<div className='voice-btn'></div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		activeUser: state.chat.activeUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sendMessage: (id, msg) => dispatch(sendMessage(id, msg))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);