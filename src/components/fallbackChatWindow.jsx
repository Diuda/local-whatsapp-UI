import React from 'react';


class FallbackChatWindow extends React.Component {


	render() {
		return (
			<div className='fallback-chat-window'>
				<div className='fallback-content-wrapper'>
					<div className='phone-img-wrapper'>
						<img src="/assets/images/fallback.jpg" alt=""/>
					</div>
					<div className='fallback-text-wrapper'>
						<div className='phone-connected-message'>
							Keep your phone connected
						</div>
						<div className='extra-info-message'>
							WhatsApp connects to your phone to sync messages. To reduce data ussage, connect your phone to wifi
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default FallbackChatWindow;