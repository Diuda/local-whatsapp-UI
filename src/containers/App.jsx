import React from 'react';


import ChatWindow from './chatWindow';
import SideBar from './sidebar';


class App extends React.Component {

	render() {
		return(
			<div className='parent-wrapper'>
				<div className='chat-container'>
					<SideBar />
					<ChatWindow />
				</div>
			</div>
		);
	}
}


export default App;