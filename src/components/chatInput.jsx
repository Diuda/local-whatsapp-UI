import React from 'react';

import { connect } from 'react-redux';
import { sendMessage } from '../actions/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faMicrophone, faPaperPlane  } from '@fortawesome/free-solid-svg-icons';


class ChatInput extends React.Component {

	constructor(){
		super();
		this.state = {
			isTyping: false
		}
	}


	handleSendMessage = (e) => {
		if(e.target.value){
			this.setState({isTyping: true})
		}
		else{
			this.setState({isTyping: false})
		}
		if(e.which === 13){
			this.props.sendMessage(this.props.activeUser, e.target.value);
			e.target.value = '';
			this.setState({isTyping: false});
		}
	}

	handleSendMessageFromButton = (e) => {
		this.props.sendMessage(this.props.activeUser, this.messageInput.value);
		this.messageInput.value = '';
		this.setState({isTyping: false});
	}

	render() {
		return(
			<div className='chat-wrapper'>
				<div className='emoji-btn'>
					<FontAwesomeIcon icon={faLaugh}/>
				</div>
				<div className='chat-input-wrapper'>
					<input type='text' autoComplete='off' name='chat-input' placeholder='Type a message' ref={(el) => {this.messageInput = el;}} onKeyPress={this.handleSendMessage}/>
				</div>
				{
					this.state.isTyping?
					(
						<div className='send-btn'>
							<button onClick = {this.handleSendMessageFromButton}>
								<FontAwesomeIcon icon={faPaperPlane} />
							</button>
						</div>
					):
					(
						
						<div className='voice-btn'>
								<FontAwesomeIcon icon={faMicrophone} />
						</div>
					)
				}
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